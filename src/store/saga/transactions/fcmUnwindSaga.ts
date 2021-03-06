import { ContractReceipt, providers } from 'ethers';
import { call, put } from 'redux-saga/effects';
import { DateTime } from 'luxon';

import { getErrorMessage } from '@utilities';
import { FCMUnwindAction } from '../../types';
import { deserializeAmm, getSigner, postTransactionData, serializeAmm } from '../../utilities';
import * as actions from '../../actions';
import { isUndefined } from 'lodash';


function* fcmUnwindSaga(action: FCMUnwindAction) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const signer: providers.JsonRpcSigner | null = yield getSigner();

    if (!signer) {
        return;
    }

    const amm = deserializeAmm(action.payload.amm, signer);
    const ammInformation = serializeAmm(amm)
    if (!amm) {
        return;
    }

    const { id, notional, margin } = action.payload.transaction;
    if (isUndefined(notional)) return;

    let result: ContractReceipt | void;
    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        result = yield call([amm, 'fcmUnwind'], {
            notionalToUnwind: notional,
        });

        //  CALLING API FOR TX MONITORING HERE
        if (amm.signer) {
            amm.signer.getAddress().then((signerAddress) => {
                if (result) {
                    postTransactionData(
                        signerAddress,
                        ammInformation.rateOracle.token.name.toLowerCase(),
                        margin.toString(),
                        ammInformation.fcmAddress,
                        id,
                        result.transactionHash,
                        DateTime.now().toISO(),
                        'CRYPTO_WITHDRAWAL'
                    ).then()
                }
            })
        }
    } catch (error) {
        yield put(
            actions.updateTransaction({
                id,
                failedAt: DateTime.now().toISO(),
                failureMessage: getErrorMessage(error),
            })
        );
        return;
    }

    if (!result) {
        yield put(
            actions.updateTransaction({ id, failedAt: DateTime.now().toISO(), failureMessage: 'error' }),
        );
    } else {
        yield put(
            actions.updateTransaction({ id, succeededAt: DateTime.now().toISO(), txid: result.transactionHash })
        );
    }
}

export default fcmUnwindSaga;