/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DegenScrap,
  DegenScrapInterface,
} from "../../../contracts/erc20/DegenScrap";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604080518082018252600a8152690446567656e53637261760b41b6020808301918252835180850190945260078452660444453435241560cc1b9084015281519192916200006391600391620001a6565b50805162000079906004906020840190620001a6565b505050620000b33362000091620000b960201b60201c565b6200009e90600a620002b0565b620000ad90629896806200037e565b620000be565b620003f3565b601290565b6001600160a01b038216620001195760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200012d91906200024c565b90915550506001600160a01b038216600090815260208190526040812080548392906200015c9084906200024c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001b490620003a0565b90600052602060002090601f016020900481019282620001d8576000855562000223565b82601f10620001f357805160ff191683800117855562000223565b8280016001018555821562000223579182015b828111156200022357825182559160200191906001019062000206565b506200023192915062000235565b5090565b5b8082111562000231576000815560010162000236565b60008219821115620002625762000262620003dd565b500190565b600181815b80851115620002a85781600019048211156200028c576200028c620003dd565b808516156200029a57918102915b93841c93908002906200026c565b509250929050565b6000620002c160ff841683620002c8565b9392505050565b600082620002d95750600162000378565b81620002e85750600062000378565b81600181146200030157600281146200030c576200032c565b600191505062000378565b60ff841115620003205762000320620003dd565b50506001821b62000378565b5060208310610133831016604e8410600b841016171562000351575081810a62000378565b6200035d838362000267565b8060001904821115620003745762000374620003dd565b0290505b92915050565b60008160001904831182151516156200039b576200039b620003dd565b500290565b600181811c90821680620003b557607f821691505b60208210811415620003d757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b610a7380620004036000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806342966c681161008c57806395d89b411161006657806395d89b41146101ad578063a457c2d7146101b5578063a9059cbb146101c8578063dd62ed3e146101db57600080fd5b806342966c681461015c57806370a082311461017157806379cc67901461019a57600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd14610127578063313ce5671461013a5780633950935114610149575b600080fd5b6100dc6101ee565b6040516100e9919061096a565b60405180910390f35b610105610100366004610929565b610280565b60405190151581526020016100e9565b6002545b6040519081526020016100e9565b6101056101353660046108ee565b610298565b604051601281526020016100e9565b610105610157366004610929565b6102bc565b61016f61016a366004610952565b6102de565b005b61011961017f36600461089b565b6001600160a01b031660009081526020819052604090205490565b61016f6101a8366004610929565b6102eb565b6100dc610304565b6101056101c3366004610929565b610313565b6101056101d6366004610929565b610393565b6101196101e93660046108bc565b6103a1565b6060600380546101fd906109ec565b80601f0160208091040260200160405190810160405280929190818152602001828054610229906109ec565b80156102765780601f1061024b57610100808354040283529160200191610276565b820191906000526020600020905b81548152906001019060200180831161025957829003601f168201915b5050505050905090565b60003361028e8185856103cc565b5060019392505050565b6000336102a68582856104f1565b6102b185858561056b565b506001949350505050565b60003361028e8185856102cf83836103a1565b6102d991906109bd565b6103cc565b6102e83382610739565b50565b6102f68233836104f1565b6103008282610739565b5050565b6060600480546101fd906109ec565b6000338161032182866103a1565b9050838110156103865760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6102b182868684036103cc565b60003361028e81858561056b565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b03831661042e5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161037d565b6001600160a01b03821661048f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161037d565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b60006104fd84846103a1565b9050600019811461056557818110156105585760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161037d565b61056584848484036103cc565b50505050565b6001600160a01b0383166105cf5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161037d565b6001600160a01b0382166106315760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161037d565b6001600160a01b038316600090815260208190526040902054818110156106a95760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161037d565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906106e09084906109bd565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161072c91815260200190565b60405180910390a3610565565b6001600160a01b0382166107995760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161037d565b6001600160a01b0382166000908152602081905260409020548181101561080d5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161037d565b6001600160a01b038316600090815260208190526040812083830390556002805484929061083c9084906109d5565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016104e4565b80356001600160a01b038116811461089657600080fd5b919050565b6000602082840312156108ac578081fd5b6108b58261087f565b9392505050565b600080604083850312156108ce578081fd5b6108d78361087f565b91506108e56020840161087f565b90509250929050565b600080600060608486031215610902578081fd5b61090b8461087f565b92506109196020850161087f565b9150604084013590509250925092565b6000806040838503121561093b578182fd5b6109448361087f565b946020939093013593505050565b600060208284031215610963578081fd5b5035919050565b6000602080835283518082850152825b818110156109965785810183015185820160400152820161097a565b818111156109a75783604083870101525b50601f01601f1916929092016040019392505050565b600082198211156109d0576109d0610a27565b500190565b6000828210156109e7576109e7610a27565b500390565b600181811c90821680610a0057607f821691505b60208210811415610a2157634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea26469706673582212201a4e644b4870b57d6a0e23e1bd64dc0f5c430c6a1a5d5ea5550868c2e1536f7264736f6c63430008040033";

type DegenScrapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DegenScrapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DegenScrap__factory extends ContractFactory {
  constructor(...args: DegenScrapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DegenScrap> {
    return super.deploy(overrides || {}) as Promise<DegenScrap>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DegenScrap {
    return super.attach(address) as DegenScrap;
  }
  override connect(signer: Signer): DegenScrap__factory {
    return super.connect(signer) as DegenScrap__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DegenScrapInterface {
    return new utils.Interface(_abi) as DegenScrapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DegenScrap {
    return new Contract(address, _abi, signerOrProvider) as DegenScrap;
  }
}
