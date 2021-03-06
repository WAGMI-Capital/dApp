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
exports.FixedAndVariableMathTest__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        name: "PRBMathSD59x18__DivInputTooSmall",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "rAbs",
                type: "uint256",
            },
        ],
        name: "PRBMathSD59x18__DivOverflow",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "x",
                type: "int256",
            },
        ],
        name: "PRBMathSD59x18__FromIntOverflow",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "x",
                type: "int256",
            },
        ],
        name: "PRBMathSD59x18__FromIntUnderflow",
        type: "error",
    },
    {
        inputs: [],
        name: "PRBMathSD59x18__MulInputTooSmall",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "rAbs",
                type: "uint256",
            },
        ],
        name: "PRBMathSD59x18__MulOverflow",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "x",
                type: "uint256",
            },
        ],
        name: "PRBMathUD60x18__FromUintOverflow",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "prod1",
                type: "uint256",
            },
        ],
        name: "PRBMath__MulDivFixedPointOverflow",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "prod1",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "denominator",
                type: "uint256",
            },
        ],
        name: "PRBMath__MulDivOverflow",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "timeInSeconds",
                type: "uint256",
            },
        ],
        name: "accrualFact",
        outputs: [
            {
                internalType: "uint256",
                name: "timeInYears",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
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
                name: "excessBalance",
                type: "int256",
            },
            {
                internalType: "uint256",
                name: "termStartTimestamp",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "termEndTimestamp",
                type: "uint256",
            },
        ],
        name: "calculateFixedTokenBalance",
        outputs: [
            {
                internalType: "int256",
                name: "fixedTokenBalance",
                type: "int256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "fixedTokenBalance",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "variableTokenBalance",
                type: "int256",
            },
            {
                internalType: "uint256",
                name: "termStartTimestamp",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "termEndTimestamp",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "variableFactorToMaturity",
                type: "uint256",
            },
        ],
        name: "calculateSettlementCashflow",
        outputs: [
            {
                internalType: "int256",
                name: "cashflow",
                type: "int256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "atMaturity",
                type: "bool",
            },
            {
                internalType: "uint256",
                name: "termStartTimestamp",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "termEndTimestamp",
                type: "uint256",
            },
        ],
        name: "fixedFactorTest",
        outputs: [
            {
                internalType: "uint256",
                name: "fixedFactorValue",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
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
            {
                internalType: "uint256",
                name: "accruedVariableFactor",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "termStartTimestamp",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "termEndTimestamp",
                type: "uint256",
            },
        ],
        name: "getExcessBalance",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256",
            },
        ],
        stateMutability: "view",
        type: "function",
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
            {
                internalType: "uint256",
                name: "accruedVariableFactor",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "termStartTimestamp",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "termEndTimestamp",
                type: "uint256",
            },
        ],
        name: "getFixedTokenBalance",
        outputs: [
            {
                internalType: "int256",
                name: "fixedTokenBalance",
                type: "int256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b506109b0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063183e90d01461006757806319e685a51461008c5780631baadedd1461009f5780634f97eee9146100b2578063b0bb9487146100c5578063e859f86a146100d8575b600080fd5b61007a6100753660046107bc565b6100eb565b60405190815260200160405180910390f35b61007a61009a3660046107bc565b610106565b61007a6100ad3660046107bc565b610115565b61007a6100c03660046107f7565b610124565b61007a6100d3366004610829565b610132565b61007a6100e6366004610863565b610149565b60006100fa868686868661015a565b90505b95945050505050565b60006100fa86868686866101ef565b60006100fa8686868686610258565b60006100fd85858585610299565b600061013f8484846102da565b90505b9392505050565b60006101548261039b565b92915050565b60008282116101845760405162461bcd60e51b815260040161017b9061087c565b60405180910390fd5b85158015610190575084155b1561019d575060006100fd565b60006101a8876103b2565b905060006101b5876103b2565b905060006101c68383898989610258565b905060006101d684838989610299565b670de0b6b3a764000090059a9950505050505050505050565b6000806101fb876103b2565b90506000610208876103b2565b9050600061022261021b600189896102da565b849061043d565b90506000610230838761043d565b9050600061023e82846108b0565b670de0b6b3a764000090059b9a5050505050505050505050565b60008060008061027461026d600088886102da565b8a9061043d565b9250610280888861043d565b915061028c82846108b0565b9998505050505050505050565b60008282116102ba5760405162461bcd60e51b815260040161017b9061087c565b6102d06102c9600185856102da565b8590610502565b6100fd90866108f1565b60008282116102fb5760405162461bcd60e51b815260040161017b9061087c565b60006103056105c8565b90508381101561033f5760405162461bcd60e51b8152602060048201526005602482015264422e543c5360d81b604482015260640161017b565b6000858061034d5750838210155b156103635761035c8585610930565b9050610370565b61036d8583610930565b90505b600061037b8261039b565b90506103908168056bc75e2d631000006105d8565b979650505050505050565b6000610154826a1a1601fc4ea7109e0000006105d8565b60007809392ee8e921d5d073aff322e62439fcf32d7f344649470f8f198212156103f25760405163e608e18b60e01b81526004810183905260240161017b565b7809392ee8e921d5d073aff322e62439fcf32d7f344649470f9082131561042f576040516371f72a3160e01b81526004810183905260240161017b565b50670de0b6b3a76400000290565b6000600160ff1b8314806104545750600160ff1b82145b1561047257604051630d01a11b60e21b815260040160405180910390fd5b600080600085126104835784610488565b846000035b915060008412610498578361049d565b836000035b905060006104ab83836105ed565b90506001600160ff1b038111156104d85760405163bf79e8d960e01b81526004810182905260240161017b565b6000198087139086138082186001146104f157826104f6565b826000035b98975050505050505050565b6000600160ff1b8314806105195750600160ff1b82145b156105375760405163b3c754a360e01b815260040160405180910390fd5b60008060008512610548578461054d565b846000035b91506000841261055d5783610562565b836000035b9050600061057983670de0b6b3a7640000846106af565b90506001600160ff1b038111156105a657604051637cb4bef560e01b81526004810182905260240161017b565b6000198087139086138082186001146105bf57826104f6565b6104f68361095d565b60006105d34261077d565b905090565b600061014283670de0b6b3a7640000846106af565b60008080600019848609848602925082811083820303915050670de0b6b3a764000081106106315760405163698d9a0160e11b81526004810182905260240161017b565b600080670de0b6b3a76400008688099150506706f05b59d3b1ffff81118261066b5780670de0b6b3a7640000850401945050505050610154565b620400008285030493909111909103600160ee1b02919091177faccb18165bd6fe31ae1cf318dc5b51eee0e1ba569b88cd74c1773b91fac106690201905092915050565b6000808060001985870985870292508281108382030391505080600014156106ea578382816106e0576106e0610947565b0492505050610142565b83811061071457604051631dcf306360e21b8152600481018290526024810185905260440161017b565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b60007812725dd1d243aba0e75fe645cc4873f9e65afe688c928e1f2182111561042f57604051633492ffd960e01b81526004810183905260240161017b565b600080600080600060a086880312156107d457600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b6000806000806080858703121561080d57600080fd5b5050823594602084013594506040840135936060013592509050565b60008060006060848603121561083e57600080fd5b8335801515811461084e57600080fd5b95602085013595506040909401359392505050565b60006020828403121561087557600080fd5b5035919050565b602080825260049082015263453c3d5360e01b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b600080821280156001600160ff1b03849003851316156108d2576108d261089a565b600160ff1b83900384128116156108eb576108eb61089a565b50500190565b60008083128015600160ff1b85018412161561090f5761090f61089a565b6001600160ff1b038401831381161561092a5761092a61089a565b50500390565b6000828210156109425761094261089a565b500390565b634e487b7160e01b600052601260045260246000fd5b6000600160ff1b8214156109735761097361089a565b506000039056fea26469706673582212200c8cf36852a44ca043a4f83638706a2e1edca3c2e732b4a6ff08c1468321e13164736f6c63430008090033";
var FixedAndVariableMathTest__factory = /** @class */ (function (_super) {
    __extends(FixedAndVariableMathTest__factory, _super);
    function FixedAndVariableMathTest__factory() {
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
    FixedAndVariableMathTest__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    FixedAndVariableMathTest__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    FixedAndVariableMathTest__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    FixedAndVariableMathTest__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    FixedAndVariableMathTest__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    FixedAndVariableMathTest__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    FixedAndVariableMathTest__factory.bytecode = _bytecode;
    FixedAndVariableMathTest__factory.abi = _abi;
    return FixedAndVariableMathTest__factory;
}(ethers_1.ContractFactory));
exports.FixedAndVariableMathTest__factory = FixedAndVariableMathTest__factory;
