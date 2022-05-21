import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SqrtPriceMathTest, SqrtPriceMathTestInterface } from "../SqrtPriceMathTest";
export declare class SqrtPriceMathTest__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SqrtPriceMathTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SqrtPriceMathTest;
    connect(signer: Signer): SqrtPriceMathTest__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610bdf806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80632c32d4b6146100675780632cfa7a2a1461008d57806348a0c5bd146100a0578063963001b3146100b3578063aa58276a146100c6578063fedf2b5f146100f1575b600080fd5b61007a6100753660046108f2565b610104565b6040519081526020015b60405180910390f35b61007a61009b366004610946565b61011d565b61007a6100ae3660046108f2565b610134565b61007a6100c1366004610946565b610142565b6100d96100d4366004610993565b61014f565b6040516001600160a01b039091168152602001610084565b6100d96100ff366004610993565b61015d565b60006101128585858561016b565b90505b949350505050565b600061012a848484610277565b90505b9392505050565b6000610112858585856102be565b600061012a84848461032e565b600061011285858585610362565b6000610112858585856103d4565b6000836001600160a01b0316856001600160a01b0316111561018b579293925b600160601b600160e01b03606084901b1660006101a887876109eb565b6001600160a01b031690506000876001600160a01b03161161020a5760405162461bcd60e51b8152602060048201526016602482015275073717274207072696365206d757374206265203e20360541b60448201526064015b60405180910390fd5b8361024057866001600160a01b031661022d8383896001600160a01b0316610446565b8161023a5761023a610a13565b0461026c565b61026c6102578383896001600160a01b031661053e565b886001600160a01b0316808204910615150190565b979650505050505050565b60008082600f0b1261029d5761029861029385858560016102be565b61059a565b61012a565b6102b561029385856102ae86610a29565b60006102be565b61012a90610a51565b6000836001600160a01b0316856001600160a01b031611156102de579293925b8161030b57610306836001600160801b03168686036001600160a01b0316600160601b610446565b610112565b610112836001600160801b03168686036001600160a01b0316600160601b61053e565b60008082600f0b1261034a57610298610293858585600161016b565b6102b5610293858561035b86610a29565b600061016b565b600080856001600160a01b03161161038c5760405162461bcd60e51b815260040161020190610a6e565b6000846001600160801b0316116103b55760405162461bcd60e51b815260040161020190610aa2565b816103c75761030685858560016105ea565b610112858585600161070c565b600080856001600160a01b0316116103fe5760405162461bcd60e51b815260040161020190610a6e565b6000846001600160801b0316116104275760405162461bcd60e51b815260040161020190610aa2565b8161043957610306858585600061070c565b61011285858560006105ea565b6000808060001985870985870292508281108382030391505080600014156104b657600084116104ab5760405162461bcd60e51b815260206004820152601060248201526f4469766973696f6e206279207a65726f60801b6044820152606401610201565b50829004905061012d565b8084116104d55760405162461bcd60e51b815260040161020190610ad1565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b600061054b848484610446565b90506000828061055d5761055d610a13565b848609111561012d5760001981106105875760405162461bcd60e51b815260040161020190610ad1565b8061059181610af3565b95945050505050565b6000600160ff1b82106105e65760405162461bcd60e51b815260206004820152601460248201527337bb32b9333637bb9034b7103a37a4b73a191a9b60611b6044820152606401610201565b5090565b600081156106545760006001600160a01b038411156106205761061b84600160601b876001600160801b0316610446565b610637565b6106376001600160801b038616606086901b610b0e565b90506106428161085e565b61064c9087610b30565b915050610115565b60006001600160a01b038411156106825761067d84600160601b876001600160801b031661053e565b61069f565b61069f606085901b6001600160801b038716808204910615150190565b905080866001600160a01b0316116106f95760405162461bcd60e51b815260206004820152601e60248201527f7374617274696e67207078206d757374206265203e2071756f7469656e7400006044820152606401610201565b61064c816001600160a01b038816610b5b565b60008261071a575083610115565b600160601b600160e01b03606085901b1682156107c55760006001600160a01b038716856107488282610b72565b92506107549083610b0e565b141561078f5760006107668284610b91565b905082811061078d5761078383896001600160a01b03168361053e565b9350505050610115565b505b6107bc82866107a76001600160a01b038b1683610b0e565b6107b19190610b91565b808204910615150190565b92505050610115565b60006001600160a01b038716856107dc8282610b72565b92506107e89083610b0e565b1480156107f457508082115b6108395760405162461bcd60e51b815260206004820152601660248201527564656e6f6d696e61746f7220756e646572666c6f777360501b6044820152606401610201565b60006108458284610b5b565b905061078361085e848a6001600160a01b03168461053e565b806001600160a01b03811681146108af5760405162461bcd60e51b815260206004820152601560248201527406f766572666c6f7720696e20746f55696e7431363605c1b6044820152606401610201565b919050565b80356001600160a01b03811681146108af57600080fd5b80356001600160801b03811681146108af57600080fd5b803580151581146108af57600080fd5b6000806000806080858703121561090857600080fd5b610911856108b4565b935061091f602086016108b4565b925061092d604086016108cb565b915061093b606086016108e2565b905092959194509250565b60008060006060848603121561095b57600080fd5b610964846108b4565b9250610972602085016108b4565b9150604084013580600f0b811461098857600080fd5b809150509250925092565b600080600080608085870312156109a957600080fd5b6109b2856108b4565b93506109c0602086016108cb565b92506040850135915061093b606086016108e2565b634e487b7160e01b600052601160045260246000fd5b60006001600160a01b0383811690831681811015610a0b57610a0b6109d5565b039392505050565b634e487b7160e01b600052601260045260246000fd5b6000600f82900b60016001607f1b0319811415610a4857610a486109d5565b60000392915050565b6000600160ff1b821415610a6757610a676109d5565b5060000390565b6020808252601a908201527907374617274696e67207072696365206d757374206265203e20360341b604082015260600190565b60208082526015908201527406c6971756964697479206d757374206265203e203605c1b604082015260600190565b6020808252600890820152676f766572666c6f7760c01b604082015260600190565b6000600019821415610b0757610b076109d5565b5060010190565b600082610b2b57634e487b7160e01b600052601260045260246000fd5b500490565b60006001600160a01b03828116848216808303821115610b5257610b526109d5565b01949350505050565b600082821015610b6d57610b6d6109d5565b500390565b6000816000190483118215151615610b8c57610b8c6109d5565b500290565b60008219821115610ba457610ba46109d5565b50019056fea26469706673582212200f3cfbd7179ad7e61fdd976ed6887c39dd54d33d956c3c6e2ec4f6cb8f1d3db364736f6c63430008090033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): SqrtPriceMathTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SqrtPriceMathTest;
}
//# sourceMappingURL=SqrtPriceMathTest__factory.d.ts.map