/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MarginCalculator,
  MarginCalculatorInterface,
} from "../MarginCalculator";

const _abi = [
  {
    inputs: [],
    name: "ONE",
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
    inputs: [],
    name: "ONE_UINT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SECONDS_IN_YEAR",
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
];

const _bytecode =
  "0x60b3610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060475760003560e01c80635dcc939114604c57806363f5738114606f578063c2ee3a0814606f575b600080fd5b605d6a1a1601fc4ea7109e00000081565b60405190815260200160405180910390f35b605d670de0b6b3a76400008156fea2646970667358221220ca998d272eb0dd6abe2cdb8eea302e767d1487209feeb515de7646f0255ce57064736f6c63430008090033";

export class MarginCalculator__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MarginCalculator> {
    return super.deploy(overrides || {}) as Promise<MarginCalculator>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MarginCalculator {
    return super.attach(address) as MarginCalculator;
  }
  connect(signer: Signer): MarginCalculator__factory {
    return super.connect(signer) as MarginCalculator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarginCalculatorInterface {
    return new utils.Interface(_abi) as MarginCalculatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MarginCalculator {
    return new Contract(address, _abi, signerOrProvider) as MarginCalculator;
  }
}
