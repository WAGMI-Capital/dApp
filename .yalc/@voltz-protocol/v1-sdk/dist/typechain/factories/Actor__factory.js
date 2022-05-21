"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actor__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        name: "AavePoolGetReserveNormalizedIncomeReturnedZero",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "unlocked",
                type: "bool",
            },
        ],
        name: "CanOnlyTradeIfUnlocked",
        type: "error",
    },
    {
        inputs: [],
        name: "CannotLiquidate",
        type: "error",
    },
    {
        inputs: [],
        name: "CannotSettleBeforeMaturity",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "x",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "y",
                type: "uint256",
            },
        ],
        name: "DebugError",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "amount0",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "amount1",
                type: "int256",
            },
        ],
        name: "ExpectedOppositeSigns",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint160",
                name: "sqrtPriceX96",
                type: "uint160",
            },
        ],
        name: "ExpectedSqrtPriceZeroBeforeInit",
        type: "error",
    },
    {
        inputs: [],
        name: "IRSNotionalAmountSpecifiedMustBeNonZero",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidMarginDelta",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint128",
                name: "amount",
                type: "uint128",
            },
        ],
        name: "LiquidityDeltaMustBePositiveInBurn",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint128",
                name: "amount",
                type: "uint128",
            },
        ],
        name: "LiquidityDeltaMustBePositiveInMint",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "marginRequirement",
                type: "int256",
            },
        ],
        name: "MarginLessThanMinimum",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "marginRequirement",
                type: "int256",
            },
            {
                internalType: "int24",
                name: "tick",
                type: "int24",
            },
            {
                internalType: "int256",
                name: "fixedTokenDelta",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "variableTokenDelta",
                type: "int256",
            },
            {
                internalType: "uint256",
                name: "cumulativeFeeIncurred",
                type: "uint256",
            },
            {
                internalType: "int256",
                name: "fixedTokenDeltaUnbalanced",
                type: "int256",
            },
        ],
        name: "MarginRequirementNotMet",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "marginRequirement",
                type: "int256",
            },
        ],
        name: "MarginRequirementNotMetFCM",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "requested",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "available",
                type: "uint256",
            },
        ],
        name: "NotEnoughFunds",
        type: "error",
    },
    {
        inputs: [],
        name: "OOO",
        type: "error",
    },
    {
        inputs: [],
        name: "OnlyFCM",
        type: "error",
    },
    {
        inputs: [],
        name: "OnlyMarginEngine",
        type: "error",
    },
    {
        inputs: [],
        name: "OnlyOwnerCanUpdatePosition",
        type: "error",
    },
    {
        inputs: [],
        name: "OnlyVAMM",
        type: "error",
    },
    {
        inputs: [],
        name: "PositionNetZero",
        type: "error",
    },
    {
        inputs: [],
        name: "PositionNotSettled",
        type: "error",
    },
    {
        inputs: [],
        name: "WithdrawalExceedsCurrentMargin",
        type: "error",
    },
    {
        inputs: [],
        name: "closeToOrBeyondMaturity",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "VAMMAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
            {
                internalType: "uint128",
                name: "amount",
                type: "uint128",
            },
        ],
        name: "burnViaAMM",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "FCMAddress",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "notional",
                type: "uint256",
            },
            {
                internalType: "uint160",
                name: "sqrtPriceLimitX96",
                type: "uint160",
            },
        ],
        name: "initiateFullyCollateralisedFixedTakerSwap",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "MEAddress",
                type: "address",
            },
            {
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "liquidatePosition",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "peripheryAddress",
                type: "address",
            },
            {
                components: [
                    {
                        internalType: "contract IMarginEngine",
                        name: "marginEngine",
                        type: "address",
                    },
                    {
                        internalType: "int24",
                        name: "tickLower",
                        type: "int24",
                    },
                    {
                        internalType: "int24",
                        name: "tickUpper",
                        type: "int24",
                    },
                    {
                        internalType: "uint256",
                        name: "notional",
                        type: "uint256",
                    },
                    {
                        internalType: "bool",
                        name: "isMint",
                        type: "bool",
                    },
                    {
                        internalType: "uint256",
                        name: "marginDelta",
                        type: "uint256",
                    },
                ],
                internalType: "struct IPeriphery.MintOrBurnParams",
                name: "params",
                type: "tuple",
            },
        ],
        name: "mintOrBurnViaPeriphery",
        outputs: [
            {
                internalType: "int256",
                name: "positionMarginRequirement",
                type: "int256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "VAMMAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
            {
                internalType: "uint128",
                name: "amount",
                type: "uint128",
            },
        ],
        name: "mintViaAMM",
        outputs: [
            {
                internalType: "int256",
                name: "positionMarginRequirement",
                type: "int256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "MEAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "intAddress",
                type: "address",
            },
            {
                internalType: "bool",
                name: "allowIntegration",
                type: "bool",
            },
        ],
        name: "setIntegrationApproval",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "MEAdrress",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
        ],
        name: "settlePosition",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "MEAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "_owner",
                type: "address",
            },
            {
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
        ],
        name: "settlePositionViaAMM",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "FCMAddress",
                type: "address",
            },
        ],
        name: "settleYBATrader",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "VAMMAddress",
                type: "address",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "int256",
                        name: "amountSpecified",
                        type: "int256",
                    },
                    {
                        internalType: "uint160",
                        name: "sqrtPriceLimitX96",
                        type: "uint160",
                    },
                    {
                        internalType: "int24",
                        name: "tickLower",
                        type: "int24",
                    },
                    {
                        internalType: "int24",
                        name: "tickUpper",
                        type: "int24",
                    },
                ],
                internalType: "struct IVAMM.SwapParams",
                name: "params",
                type: "tuple",
            },
        ],
        name: "swapViaAMM",
        outputs: [
            {
                internalType: "int256",
                name: "_fixedTokenDelta",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "_variableTokenDelta",
                type: "int256",
            },
            {
                internalType: "uint256",
                name: "_cumulativeFeeIncurred",
                type: "uint256",
            },
            {
                internalType: "int256",
                name: "_fixedTokenDeltaUnbalanced",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "_marginRequirement",
                type: "int256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "peripheryAddress",
                type: "address",
            },
            {
                components: [
                    {
                        internalType: "contract IMarginEngine",
                        name: "marginEngine",
                        type: "address",
                    },
                    {
                        internalType: "bool",
                        name: "isFT",
                        type: "bool",
                    },
                    {
                        internalType: "uint256",
                        name: "notional",
                        type: "uint256",
                    },
                    {
                        internalType: "uint160",
                        name: "sqrtPriceLimitX96",
                        type: "uint160",
                    },
                    {
                        internalType: "int24",
                        name: "tickLower",
                        type: "int24",
                    },
                    {
                        internalType: "int24",
                        name: "tickUpper",
                        type: "int24",
                    },
                    {
                        internalType: "uint256",
                        name: "marginDelta",
                        type: "uint256",
                    },
                ],
                internalType: "struct IPeriphery.SwapPeripheryParams",
                name: "params",
                type: "tuple",
            },
        ],
        name: "swapViaPeriphery",
        outputs: [
            {
                internalType: "int256",
                name: "_fixedTokenDelta",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "_variableTokenDelta",
                type: "int256",
            },
            {
                internalType: "uint256",
                name: "_cumulativeFeeIncurred",
                type: "uint256",
            },
            {
                internalType: "int256",
                name: "_fixedTokenDeltaUnbalanced",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "_marginRequirement",
                type: "int256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "FCMAddress",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "notionalToUnwind",
                type: "uint256",
            },
            {
                internalType: "uint160",
                name: "sqrtPriceLimitX96",
                type: "uint160",
            },
        ],
        name: "unwindFullyCollateralisedFixedTakerSwap",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "MEAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "_owner",
                type: "address",
            },
            {
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
            {
                internalType: "int256",
                name: "marginDelta",
                type: "int256",
            },
        ],
        name: "updatePositionMarginViaAMM",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50610f3f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100af5760003560e01c806302b660a8146100b4578063044ed392146100f4578063292a60d514610107578063303958f31461011c57806331bdf73e1461012f5780634028369814610142578063633755e11461011c57806369696dbf14610155578063840047eb146101685780638a8763b41461017b578063cacdd7231461019c578063e9ae4bc8146101af578063eacb1f4c146101c2575b600080fd5b6100c76100c236600461094c565b6101d5565b604080519586526020860194909452928401919091526060830152608082015260a0015b60405180910390f35b6100c7610102366004610a00565b6102b8565b61011a610115366004610ac5565b610384565b005b61011a61012a366004610b42565b610410565b61011a61013d366004610b9e565b610478565b61011a610150366004610c02565b6104f3565b61011a610163366004610c49565b6105a0565b61011a610176366004610c8b565b610629565b61018e610189366004610ac5565b6106a0565b6040519081526020016100eb565b61011a6101aa366004610ca8565b610731565b61011a6101bd366004610c49565b6107ba565b61018e6101d0366004610cf9565b6107e7565b60408051630d241f8d60e21b815282516001600160a01b0390811660048301526020840151151560248301529183015160448201526060830151821660648201526080830151600290810b608483015260a0840151900b60a482015260c083015160c482015260009182918291829182918816906334907e349060e40160c060405180830381600087803b15801561026c57600080fd5b505af1158015610280573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102a49190610d99565b50939b929a50909850965090945092505050565b604080516333bac73760e11b815282516001600160a01b0390811660048301526020840151602483015291830151821660448201526060830151600290810b60648301526080840151900b608482015260009182918291829182918816906367758e6e9060a40160a060405180830381600087803b15801561033957600080fd5b505af115801561034d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103719190610dee565b939b929a50909850965090945092505050565b604051631f2f089360e01b81526001600160a01b03861690631f2f0893906103b6908790879087908790600401610e2e565b602060405180830381600087803b1580156103d057600080fd5b505af11580156103e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104089190610e61565b505050505050565b60405163a725b96560e01b81526001600160a01b0385169063a725b9659061044090869086908690600401610e7a565b600060405180830381600087803b15801561045a57600080fd5b505af115801561046e573d6000803e3d6000fd5b5050505050505050565b604051637717797f60e01b81526001600160a01b038581166004830152600285810b602484015284900b604483015260648201839052861690637717797f90608401600060405180830381600087803b1580156104d457600080fd5b505af11580156104e8573d6000803e3d6000fd5b505050505050505050565b6000836001600160a01b031663c45a01556040518163ffffffff1660e01b815260040160206040518083038186803b15801561052e57600080fd5b505afa158015610542573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105669190610e9f565b604051630db9b71760e41b81526001600160a01b03858116600483015284151560248301529192509082169063db9b717090604401610440565b6040516355468a8b60e01b81526001600160a01b038416906355468a8b906105ce9085908590600401610ebc565b608060405180830381600087803b1580156105e857600080fd5b505af11580156105fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106209190610ed3565b50505050505050565b806001600160a01b031663ebc9b02e6040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561066457600080fd5b505af1158015610678573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069c9190610e61565b5050565b604051635c6651a760e11b81526000906001600160a01b0387169063b8cca34e906106d5908890889088908890600401610e2e565b602060405180830381600087803b1580156106ef57600080fd5b505af1158015610703573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107279190610e61565b9695505050505050565b604051630b2b281f60e11b81526001600160a01b03851690631656503e9061076190849087908790600401610e7a565b602060405180830381600087803b15801561077b57600080fd5b505af115801561078f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b39190610e61565b5050505050565b60405162dd089d60e21b81526001600160a01b038416906303742274906105ce9085908590600401610ebc565b60408051630a691a4760e11b815282516001600160a01b0390811660048301526020840151600290810b60248401529284015190920b60448201526060830151606482015260808301511515608482015260a083015160a48201526000918416906314d2348e9060c401602060405180830381600087803b15801561086b57600080fd5b505af115801561087f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a39190610e61565b9392505050565b6001600160a01b03811681146108bf57600080fd5b50565b60405160e081016001600160401b03811182821017156108f257634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c081016001600160401b03811182821017156108f257634e487b7160e01b600052604160045260246000fd5b8035801515811461093857600080fd5b919050565b8060020b81146108bf57600080fd5b60008082840361010081121561096157600080fd5b833561096c816108aa565b925060e0601f198201121561098057600080fd5b506109896108c2565b6020840135610997816108aa565b81526109a560408501610928565b60208201526060840135604082015260808401356109c2816108aa565b606082015260a08401356109d58161093d565b608082015260c08401356109e88161093d565b60a082015260e0939093013560c08401525092909150565b60008082840360c0811215610a1457600080fd5b8335610a1f816108aa565b925060a0601f1982011215610a3357600080fd5b5060405160a081016001600160401b0381118282101715610a6457634e487b7160e01b600052604160045260246000fd5b6040526020840135610a75816108aa565b8152604084013560208201526060840135610a8f816108aa565b60408201526080840135610aa28161093d565b606082015260a0840135610ab58161093d565b6080820152919491935090915050565b600080600080600060a08688031215610add57600080fd5b8535610ae8816108aa565b94506020860135610af8816108aa565b93506040860135610b088161093d565b92506060860135610b188161093d565b915060808601356001600160801b0381168114610b3457600080fd5b809150509295509295909350565b60008060008060808587031215610b5857600080fd5b8435610b63816108aa565b93506020850135610b73816108aa565b92506040850135610b838161093d565b91506060850135610b938161093d565b939692955090935050565b600080600080600060a08688031215610bb657600080fd5b8535610bc1816108aa565b94506020860135610bd1816108aa565b93506040860135610be18161093d565b92506060860135610bf18161093d565b949793965091946080013592915050565b600080600060608486031215610c1757600080fd5b8335610c22816108aa565b92506020840135610c32816108aa565b9150610c4060408501610928565b90509250925092565b600080600060608486031215610c5e57600080fd5b8335610c69816108aa565b9250602084013591506040840135610c80816108aa565b809150509250925092565b600060208284031215610c9d57600080fd5b81356108a3816108aa565b60008060008060808587031215610cbe57600080fd5b8435610cc9816108aa565b93506020850135610cd98161093d565b92506040850135610ce98161093d565b91506060850135610b93816108aa565b60008082840360e0811215610d0d57600080fd5b8335610d18816108aa565b925060c0601f1982011215610d2c57600080fd5b50610d356108f8565b6020840135610d43816108aa565b81526040840135610d538161093d565b60208201526060840135610d668161093d565b604082015260808401356060820152610d8160a08501610928565b608082015260c0939093013560a08401525092909150565b60008060008060008060c08789031215610db257600080fd5b865195506020870151945060408701519350606087015192506080870151915060a0870151610de08161093d565b809150509295509295509295565b600080600080600060a08688031215610e0657600080fd5b5050835160208501516040860151606087015160809097015192989197509594509092509050565b6001600160a01b03949094168452600292830b6020850152910b60408301526001600160801b0316606082015260800190565b600060208284031215610e7357600080fd5b5051919050565b6001600160a01b03939093168352600291820b6020840152900b604082015260600190565b600060208284031215610eb157600080fd5b81516108a3816108aa565b9182526001600160a01b0316602082015260400190565b60008060008060808587031215610ee957600080fd5b50508251602084015160408501516060909501519196909550909250905056fea2646970667358221220857e7708a9ac637dce9030c100d1932c8591a3747f2a682643e1cd4cc515c50c64736f6c63430008090033";
var Actor__factory = /** @class */ (function (_super) {
    __extends(Actor__factory, _super);
    function Actor__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (args.length === 1) {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        else {
            _this = _super.apply(this, args) || this;
        }
        return _this;
    }
    Actor__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    Actor__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    Actor__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Actor__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Actor__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Actor__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Actor__factory.bytecode = _bytecode;
    Actor__factory.abi = _abi;
    return Actor__factory;
}(ethers_1.ContractFactory));
exports.Actor__factory = Actor__factory;
