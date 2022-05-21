import { Signer, ContractFactory, PayableOverrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20Mock, ERC20MockInterface } from "../ERC20Mock";
export declare class ERC20Mock__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(name: string, symbol: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ERC20Mock>;
    getDeployTransaction(name: string, symbol: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC20Mock;
    connect(signer: Signer): ERC20Mock__factory;
    static readonly bytecode = "0x608060405260405162000f4a38038062000f4a8339810160408190526200002691620002ca565b8151829082906200003f90600390602085019062000171565b5080516200005590600490602084019062000171565b5050506200006f3364e8d4a510006200007760201b60201c565b5050620003a9565b62000083828262000087565b5050565b6001600160a01b038216620000e25760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620000f6919062000331565b90915550506001600160a01b038216600090815260208190526040812080548392906200012590849062000331565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a362000083565b8280546200017f9062000356565b90600052602060002090601f016020900481019282620001a35760008555620001ee565b82601f10620001be57805160ff1916838001178555620001ee565b82800160010185558215620001ee579182015b82811115620001ee578251825591602001919060010190620001d1565b50620001fc92915062000200565b5090565b5b80821115620001fc576000815560010162000201565b600082601f83011262000228578081fd5b81516001600160401b038082111562000245576200024562000393565b604051601f8301601f19908116603f0116810190828211818310171562000270576200027062000393565b816040528381526020925086838588010111156200028c578485fd5b8491505b83821015620002af578582018301518183018401529082019062000290565b83821115620002c057848385830101525b9695505050505050565b60008060408385031215620002dd578182fd5b82516001600160401b0380821115620002f4578384fd5b620003028683870162000217565b9350602085015191508082111562000318578283fd5b50620003278582860162000217565b9150509250929050565b600082198211156200035157634e487b7160e01b81526011600452602481fd5b500190565b600181811c908216806200036b57607f821691505b602082108114156200038d57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b610b9180620003b96000396000f3fe608060405234801561001057600080fd5b50600436106100c55760003560e01c806306fdde03146100ca578063095ea7b3146100e857806318160ddd1461010b578063222f5be01461011d57806323b872dd14610132578063313ce56714610145578063395093511461015457806340c10f191461016757806356189cb41461017a57806370a082311461018d57806395d89b41146101b65780639dc29fac146101be578063a457c2d7146101d1578063a9059cbb146101e4578063dd62ed3e146101f7575b600080fd5b6100d2610230565b6040516100df9190610a68565b60405180910390f35b6100fb6100f6366004610a3f565b6102c2565b60405190151581526020016100df565b6002545b6040519081526020016100df565b61013061012b366004610a04565b6102d8565b005b6100fb610140366004610a04565b6102e8565b604051601281526020016100df565b6100fb610162366004610a3f565b610397565b610130610175366004610a3f565b6103d3565b610130610188366004610a04565b6103e1565b61010f61019b3660046109b1565b6001600160a01b031660009081526020819052604090205490565b6100d26103ec565b6101306101cc366004610a3f565b6103fb565b6100fb6101df366004610a3f565b610405565b6100fb6101f2366004610a3f565b61049e565b61010f6102053660046109d2565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461023f90610aea565b80601f016020809104026020016040519081016040528092919081815260200182805461026b90610aea565b80156102b85780601f1061028d576101008083540402835291602001916102b8565b820191906000526020600020905b81548152906001019060200180831161029b57829003601f168201915b5050505050905090565b60006102cf3384846104ab565b50600192915050565b6102e38383836105cf565b505050565b60006102f58484846105cf565b6001600160a01b03841660009081526001602090815260408083203384529091529020548281101561037f5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b61038c85338584036104ab565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916102cf9185906103ce908690610abb565b6104ab565b6103dd828261078c565b5050565b6102e38383836104ab565b60606004805461023f90610aea565b6103dd8282610859565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156104875760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610376565b61049433858584036104ab565b5060019392505050565b60006102cf3384846105cf565b6001600160a01b03831661050d5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610376565b6001600160a01b03821661056e5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610376565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166106335760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610376565b6001600160a01b0382166106955760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610376565b6001600160a01b0383166000908152602081905260409020548181101561070d5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610376565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610744908490610abb565b92505081905550826001600160a01b0316846001600160a01b0316600080516020610b3c8339815191528460405161077e91815260200190565b60405180910390a350505050565b6001600160a01b0382166107e25760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610376565b80600260008282546107f49190610abb565b90915550506001600160a01b03821660009081526020819052604081208054839290610821908490610abb565b90915550506040518181526001600160a01b03831690600090600080516020610b3c8339815191529060200160405180910390a35050565b6001600160a01b0382166108b95760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610376565b6001600160a01b0382166000908152602081905260409020548181101561092d5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610376565b6001600160a01b038316600090815260208190526040812083830390556002805484929061095c908490610ad3565b90915550506040518281526000906001600160a01b03851690600080516020610b3c8339815191529060200160405180910390a3505050565b80356001600160a01b03811681146109ac57600080fd5b919050565b6000602082840312156109c2578081fd5b6109cb82610995565b9392505050565b600080604083850312156109e4578081fd5b6109ed83610995565b91506109fb60208401610995565b90509250929050565b600080600060608486031215610a18578081fd5b610a2184610995565b9250610a2f60208501610995565b9150604084013590509250925092565b60008060408385031215610a51578182fd5b610a5a83610995565b946020939093013593505050565b6000602080835283518082850152825b81811015610a9457858101830151858201604001528201610a78565b81811115610aa55783604083870101525b50601f01601f1916929092016040019392505050565b60008219821115610ace57610ace610b25565b500190565b600082821015610ae557610ae5610b25565b500390565b600181811c90821680610afe57607f821691505b60208210811415610b1f57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122050dcc75e37f4298e44fa94e1202e55368d9f66774d830d7a455dd5e6e9d494ff64736f6c63430008040033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
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
        anonymous?: undefined;
    })[];
    static createInterface(): ERC20MockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20Mock;
}
//# sourceMappingURL=ERC20Mock__factory.d.ts.map