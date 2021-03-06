import JSBI from 'jsbi';
import { DateTime } from 'luxon';
import AMM from './amm';
import FCMSwap from './fcmSwap';
import FCMUnwind from './fcmUnwind';
import FCMSettlement from './fcmSettlement';
import Burn from './burn';
import Liquidation from './liquidation';
import MarginUpdate from './marginUpdate';
import Mint from './mint';
import Settlement from './settlement';
import Swap from './swap';
import { Price } from './fractions/price';
export declare type PositionConstructorArgs = {
    source: string;
    id: string;
    createdTimestamp: JSBI;
    amm: AMM;
    owner: string;
    updatedTimestamp: JSBI;
    fixedTokenBalance: JSBI;
    variableTokenBalance: JSBI;
    isSettled: boolean;
    marginInScaledYieldBearingTokens: JSBI;
    fcmSwaps: Array<FCMSwap>;
    fcmUnwinds: Array<FCMUnwind>;
    fcmSettlements: Array<FCMSettlement>;
    tickLower: number;
    tickUpper: number;
    liquidity: JSBI;
    margin: JSBI;
    accumulatedFees: JSBI;
    positionType: number;
    totalNotionalTraded: JSBI;
    sumOfWeightedFixedRate: JSBI;
    mints: Array<Mint>;
    burns: Array<Burn>;
    swaps: Array<Swap>;
    marginUpdates: Array<MarginUpdate>;
    liquidations: Array<Liquidation>;
    settlements: Array<Settlement>;
};
declare class Position {
    readonly source: string;
    readonly id: string;
    readonly createdTimestamp: JSBI;
    readonly amm: AMM;
    readonly owner: string;
    readonly updatedTimestamp: JSBI;
    readonly marginInScaledYieldBearingTokens: JSBI;
    readonly fixedTokenBalance: JSBI;
    readonly variableTokenBalance: JSBI;
    readonly isSettled: boolean;
    readonly fcmSwaps: Array<FCMSwap>;
    readonly fcmUnwinds: Array<FCMUnwind>;
    readonly fcmSettlements: Array<FCMSettlement>;
    readonly tickLower: number;
    readonly tickUpper: number;
    readonly liquidity: JSBI;
    readonly margin: JSBI;
    readonly accumulatedFees: JSBI;
    readonly positionType: number;
    readonly mints: Array<Mint>;
    readonly burns: Array<Burn>;
    readonly swaps: Array<Swap>;
    readonly marginUpdates: Array<MarginUpdate>;
    readonly liquidations: Array<Liquidation>;
    readonly settlements: Array<Settlement>;
    readonly totalNotionalTraded: JSBI;
    readonly sumOfWeightedFixedRate: JSBI;
    constructor({ source, id, createdTimestamp, amm, owner, updatedTimestamp, marginInScaledYieldBearingTokens, fixedTokenBalance, variableTokenBalance, isSettled, fcmSwaps, fcmUnwinds, fcmSettlements, tickLower, tickUpper, liquidity, margin, accumulatedFees, positionType, mints, burns, swaps, marginUpdates, liquidations, settlements, totalNotionalTraded, sumOfWeightedFixedRate, }: PositionConstructorArgs);
    get priceLower(): Price;
    get priceUpper(): Price;
    get fixedRateLower(): Price;
    get fixedRateUpper(): Price;
    get notional(): number;
    get effectiveMargin(): number;
    get effectiveFixedTokenBalance(): number;
    get effectiveVariableTokenBalance(): number;
    get effectiveAccumulatedFees(): number;
    get createdDateTime(): DateTime;
    get updatedDateTime(): DateTime;
    get averageFixedRate(): number | undefined;
}
export default Position;
//# sourceMappingURL=position.d.ts.map