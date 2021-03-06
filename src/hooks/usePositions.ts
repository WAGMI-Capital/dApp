import JSBI from 'jsbi';
import { useMemo, useEffect } from 'react';
import isNull from 'lodash/isNull';
import { Position } from '@voltz-protocol/v1-sdk';
import { DateTime } from 'luxon';

import { actions, selectors } from '@store';
import { useAgent, useWallet, useSelector, useDispatch } from '@hooks';
import { Agents } from '@components/contexts';
import { FCMPositionFactory, MEPositionFactory } from '@factories';

export type usePositionsResult = {
  positions?: Position[];
  positionsByAgent?: Position[];
  positionsByAgentGroup?: Position[];
  loading: boolean;
  error: boolean;
};

const usePositions = (): usePositionsResult => {
  const { agent } = useAgent();
  const { signer, wallet, loading, error } = useWallet();
  const isSignerAvailable = !isNull(signer);
  const positionCount = wallet?.positions.length;
  const fcmPositionCount = wallet?.fcmPositions.length;

  const fcmPositions = useMemo(() => {
    if (wallet && wallet.fcmPositions && !loading && !error) {
      return wallet.fcmPositions.map(positionData => FCMPositionFactory(positionData, signer));
    }
  }, [fcmPositionCount, loading, error, isSignerAvailable]);

  const mePositions = useMemo(() => {
    if (wallet && wallet.positions && !loading && !error) {
      return wallet.positions.map(positionData => MEPositionFactory(positionData, signer));
    }
  }, [positionCount, loading, error, isSignerAvailable]);

  const positions = (mePositions) ? ((fcmPositions) ? mePositions.concat(fcmPositions) : mePositions) : fcmPositions;
  if (positions) {
    positions.sort((a, b) => {
      if (JSBI.GT(a.createdTimestamp, b.createdTimestamp)) {
        return 1;
      }
      if (JSBI.GT(b.createdTimestamp, a.createdTimestamp)) {
        return -1;
      }
      return 0;
    })
  }

  const positionsByAgent = useMemo(() => {
    return positions?.filter(({ positionType }) => {
      switch (agent) {
        case Agents.LIQUIDITY_PROVIDER:
          return positionType === 3;

        case Agents.FIXED_TRADER:
          return positionType === 1;

        case Agents.VARIABLE_TRADER:
          return positionType === 2;
      }
    });
  }, [positions, agent]);

  const positionsByAgentGroup = useMemo(() => {
    return positions?.filter(({ positionType }) => {
      if (agent === Agents.LIQUIDITY_PROVIDER) {
        return positionType === 3;
      } else {
        return (positionType === 1 || positionType === 2);
      }
    });
  }, [positions, agent]);

  const unresolvedTransactions = useSelector(selectors.unresolvedTransactionsSelector);
  const shouldTryToCloseTransactions =
    unresolvedTransactions.length > 0 && positions && positions.length > 0;
  const dispatch = useDispatch();

  // [might be broken]
  useEffect(() => {
    if (shouldTryToCloseTransactions) {
      unresolvedTransactions.forEach((unresolvedTransaction) => {
        const matchingPosition = positions.find(
          ({
            amm: { id: ammId },
            fixedRateLower,
            fixedRateUpper,
            effectiveFixedTokenBalance,
            positionType,
          }) => {
            if (ammId !== unresolvedTransaction.ammId) {
              return false;
            }

            if (positionType === 3 && unresolvedTransaction.agent !== Agents.LIQUIDITY_PROVIDER) {
              return false;
            }

            if (
              effectiveFixedTokenBalance > 0 &&
              unresolvedTransaction.agent !== Agents.FIXED_TRADER
            ) {
              return false;
            }

            if (fixedRateLower.toNumber() !== unresolvedTransaction.fixedLow) {
              return false;
            }

            if (fixedRateUpper.toNumber() !== unresolvedTransaction.fixedHigh) {
              return false;
            }

            return true;
          },
        );

        if (matchingPosition) {
          dispatch(
            actions.updateTransaction({
              id: unresolvedTransaction.id,
              resolvedAt: DateTime.now().toISO(),
            }),
          );
        }
      });
    }
  }, [shouldTryToCloseTransactions, positions, dispatch]);

  return { positions, positionsByAgent, positionsByAgentGroup, loading, error };
};

export default usePositions;
