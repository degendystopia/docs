/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SmolDoomers,
  SmolDoomersInterface,
} from "../../../contracts/misc/SmolDoomers";

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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
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
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
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
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_salePrice",
        type: "uint256",
      },
    ],
    name: "royaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "royaltyAmount",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "customBaseURI_",
        type: "string",
      },
    ],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604080518082018252600c81526b536d6f6c20446f6f6d65727360a01b602080830191825283518085019094526008845267534d4f4c444f4f4d60c01b908401528151919291620000669160009162000141565b5080516200007c90600190602084019062000141565b5050506200009962000093620000eb60201b60201c565b620000ef565b60405180608001604052806044815260200162001e32604491398051620000c991600b9160209091019062000141565b50600060095561041a600a556003600e556005600d5561012c600c5562000224565b3390565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200014f90620001e7565b90600052602060002090601f016020900481019282620001735760008555620001be565b82601f106200018e57805160ff1916838001178555620001be565b82800160010185558215620001be579182015b82811115620001be578251825591602001919060010190620001a1565b50620001cc929150620001d0565b5090565b5b80821115620001cc5760008155600101620001d1565b600181811c90821680620001fc57607f821691505b602082108114156200021e57634e487b7160e01b600052602260045260246000fd5b50919050565b611bfe80620002346000396000f3fe60806040526004361061011f5760003560e01c806370a08231116100a0578063a22cb46511610064578063a22cb46514610332578063b88d4fde14610352578063c87b56dd14610372578063e985e9c514610392578063f2fde38b146103db57600080fd5b806370a08231146102b7578063715018a6146102d75780638da5cb5b146102ec57806395d89b411461030a578063a0712d681461031f57600080fd5b806323b872dd116100e757806323b872dd146101f85780632a55205a1461021857806342842e0e1461025757806355f804b3146102775780636352211e1461029757600080fd5b806301ffc9a71461012457806306fdde0314610159578063081812fc1461017b578063095ea7b3146101b357806318160ddd146101d5575b600080fd5b34801561013057600080fd5b5061014461013f36600461183e565b6103fb565b60405190151581526020015b60405180910390f35b34801561016557600080fd5b5061016e61042d565b604051610150919061198d565b34801561018757600080fd5b5061019b6101963660046118bc565b6104bf565b6040516001600160a01b039091168152602001610150565b3480156101bf57600080fd5b506101d36101ce366004611815565b610559565b005b3480156101e157600080fd5b506101ea61066f565b604051908152602001610150565b34801561020457600080fd5b506101d3610213366004611727565b61067f565b34801561022457600080fd5b506102386102333660046118d4565b6106b0565b604080516001600160a01b039093168352602083019190915201610150565b34801561026357600080fd5b506101d3610272366004611727565b6106eb565b34801561028357600080fd5b506101d3610292366004611876565b610706565b3480156102a357600080fd5b5061019b6102b23660046118bc565b610747565b3480156102c357600080fd5b506101ea6102d23660046116db565b6107be565b3480156102e357600080fd5b506101d3610845565b3480156102f857600080fd5b506007546001600160a01b031661019b565b34801561031657600080fd5b5061016e61087b565b6101d361032d3660046118bc565b61088a565b34801561033e57600080fd5b506101d361034d3660046117db565b610991565b34801561035e57600080fd5b506101d361036d366004611762565b61099c565b34801561037e57600080fd5b5061016e61038d3660046118bc565b6109d4565b34801561039e57600080fd5b506101446103ad3660046116f5565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b3480156103e757600080fd5b506101d36103f63660046116db565b610b4e565b60006001600160e01b0319821663152a902d60e11b141561041e57506001919050565b61042782610be9565b92915050565b60606000805461043c90611b06565b80601f016020809104026020016040519081016040528092919081815260200182805461046890611b06565b80156104b55780601f1061048a576101008083540402835291602001916104b5565b820191906000526020600020905b81548152906001019060200180831161049857829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b031661053d5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061056482610747565b9050806001600160a01b0316836001600160a01b031614156105d25760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610534565b336001600160a01b03821614806105ee57506105ee81336103ad565b6106605760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610534565b61066a8383610c39565b505050565b600061067a60085490565b905090565b6106893382610ca7565b6106a55760405162461bcd60e51b815260040161053490611a27565b61066a838383610d9a565b6000806106c56007546001600160a01b031690565b612710600c54856106d69190611aa4565b6106e09190611a90565b915091509250929050565b61066a8383836040518060200160405280600081525061099c565b6007546001600160a01b031633146107305760405162461bcd60e51b8152600401610534906119f2565b805161074390600b9060208401906115b0565b5050565b6000818152600260205260408120546001600160a01b0316806104275760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610534565b60006001600160a01b0382166108295760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610534565b506001600160a01b031660009081526003602052604090205490565b6007546001600160a01b0316331461086f5760405162461bcd60e51b8152600401610534906119f2565b6108796000610f3a565b565b60606001805461043c90611b06565b600e548111156108dc5760405162461bcd60e51b815260206004820152601e60248201527f43616e6e6f74206d696e742074686174206d616e79206174206f6e63652e00006044820152606401610534565b806009546108ea9190611aa4565b3410156109315760405162461bcd60e51b81526020600482015260156024820152742737ba1032b737bab3b41020ab20ac1039b2b73a1760591b6044820152606401610534565b6007546040516001600160a01b03909116903480156108fc02916000818181858888f1935050505015801561096a573d6000803e3d6000fd5b5060005b818110156107435761097f33610f8c565b8061098981611b41565b91505061096e565b61074333838361105b565b6109a63383610ca7565b6109c25760405162461bcd60e51b815260040161053490611a27565b6109ce8484848461112a565b50505050565b6000818152600260205260409020546060906001600160a01b0316610a555760405162461bcd60e51b815260206004820152603160248201527f45524337323155524953746f726167653a2055524920717565727920666f72206044820152703737b732bc34b9ba32b73a103a37b5b2b760791b6064820152608401610534565b60008281526006602052604081208054610a6e90611b06565b80601f0160208091040260200160405190810160405280929190818152602001828054610a9a90611b06565b8015610ae75780601f10610abc57610100808354040283529160200191610ae7565b820191906000526020600020905b815481529060010190602001808311610aca57829003601f168201915b505050505090506000610af861115d565b9050805160001415610b0b575092915050565b815115610b3d578082604051602001610b25929190611921565b60405160208183030381529060405292505050919050565b610b468461116c565b949350505050565b6007546001600160a01b03163314610b785760405162461bcd60e51b8152600401610534906119f2565b6001600160a01b038116610bdd5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610534565b610be681610f3a565b50565b60006001600160e01b031982166380ac58cd60e01b1480610c1a57506001600160e01b03198216635b5e139f60e01b145b8061042757506301ffc9a760e01b6001600160e01b0319831614610427565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610c6e82610747565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b0316610d205760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610534565b6000610d2b83610747565b9050806001600160a01b0316846001600160a01b03161480610d665750836001600160a01b0316610d5b846104bf565b6001600160a01b0316145b80610b4657506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff16610b46565b826001600160a01b0316610dad82610747565b6001600160a01b031614610e155760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b6064820152608401610534565b6001600160a01b038216610e775760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610534565b610e82600082610c39565b6001600160a01b0383166000908152600360205260408120805460019290610eab908490611ac3565b90915550506001600160a01b0382166000908152600360205260408120805460019290610ed9908490611a78565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b610f9a600880546001019055565b600a546008541115610fee5760405162461bcd60e51b815260206004820152601c60248201527f50726f6a6563742069732066696e6973686564206d696e74696e672e000000006044820152606401610534565b6000610ff960085490565b90506110058282611247565b6007546001600160a01b0383811691161480159061102d5750600d5461102b9082611b5c565b155b801561103c5750600a54600854105b15610743576107436110566007546001600160a01b031690565b610f8c565b816001600160a01b0316836001600160a01b031614156110bd5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610534565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611135848484610d9a565b61114184848484611389565b6109ce5760405162461bcd60e51b8152600401610534906119a0565b6060600b805461043c90611b06565b6000818152600260205260409020546060906001600160a01b03166111eb5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610534565b60006111f561115d565b905060008151116112155760405180602001604052806000815250611240565b8061121f84611496565b604051602001611230929190611921565b6040516020818303038152906040525b9392505050565b6001600160a01b03821661129d5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610534565b6000818152600260205260409020546001600160a01b0316156113025760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610534565b6001600160a01b038216600090815260036020526040812080546001929061132b908490611a78565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006001600160a01b0384163b1561148b57604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906113cd903390899088908890600401611950565b602060405180830381600087803b1580156113e757600080fd5b505af1925050508015611417575060408051601f3d908101601f191682019092526114149181019061185a565b60015b611471573d808015611445576040519150601f19603f3d011682016040523d82523d6000602084013e61144a565b606091505b5080516114695760405162461bcd60e51b8152600401610534906119a0565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610b46565b506001949350505050565b6060816114ba5750506040805180820190915260018152600360fc1b602082015290565b8160005b81156114e457806114ce81611b41565b91506114dd9050600a83611a90565b91506114be565b60008167ffffffffffffffff81111561150d57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611537576020820181803683370190505b5090505b8415610b465761154c600183611ac3565b9150611559600a86611b5c565b611564906030611a78565b60f81b81838151811061158757634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506115a9600a86611a90565b945061153b565b8280546115bc90611b06565b90600052602060002090601f0160209004810192826115de5760008555611624565b82601f106115f757805160ff1916838001178555611624565b82800160010185558215611624579182015b82811115611624578251825591602001919060010190611609565b50611630929150611634565b5090565b5b808211156116305760008155600101611635565b600067ffffffffffffffff8084111561166457611664611b9c565b604051601f8501601f19908116603f0116810190828211818310171561168c5761168c611b9c565b816040528093508581528686860111156116a557600080fd5b858560208301376000602087830101525050509392505050565b80356001600160a01b03811681146116d657600080fd5b919050565b6000602082840312156116ec578081fd5b611240826116bf565b60008060408385031215611707578081fd5b611710836116bf565b915061171e602084016116bf565b90509250929050565b60008060006060848603121561173b578081fd5b611744846116bf565b9250611752602085016116bf565b9150604084013590509250925092565b60008060008060808587031215611777578081fd5b611780856116bf565b935061178e602086016116bf565b925060408501359150606085013567ffffffffffffffff8111156117b0578182fd5b8501601f810187136117c0578182fd5b6117cf87823560208401611649565b91505092959194509250565b600080604083850312156117ed578182fd5b6117f6836116bf565b91506020830135801515811461180a578182fd5b809150509250929050565b60008060408385031215611827578182fd5b611830836116bf565b946020939093013593505050565b60006020828403121561184f578081fd5b813561124081611bb2565b60006020828403121561186b578081fd5b815161124081611bb2565b600060208284031215611887578081fd5b813567ffffffffffffffff81111561189d578182fd5b8201601f810184136118ad578182fd5b610b4684823560208401611649565b6000602082840312156118cd578081fd5b5035919050565b600080604083850312156118e6578182fd5b50508035926020909101359150565b6000815180845261190d816020860160208601611ada565b601f01601f19169290920160200192915050565b60008351611933818460208801611ada565b835190830190611947818360208801611ada565b01949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611983908301846118f5565b9695505050505050565b60208152600061124060208301846118f5565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60008219821115611a8b57611a8b611b70565b500190565b600082611a9f57611a9f611b86565b500490565b6000816000190483118215151615611abe57611abe611b70565b500290565b600082821015611ad557611ad5611b70565b500390565b60005b83811015611af5578181015183820152602001611add565b838111156109ce5750506000910152565b600181811c90821680611b1a57607f821691505b60208210811415611b3b57634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611b5557611b55611b70565b5060010190565b600082611b6b57611b6b611b86565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b031981168114610be657600080fdfea2646970667358221220ee14c4727488e5e2bfa06d26047077d29dc87bf7da47857ba473525c2fa5565c64736f6c6343000804003368747470733a2f2f697066732e696f2f697066732f516d554169634a70773344786e314653486f4e4b737a7a36546a5350627a626247777162423359596e35423834372f";

type SmolDoomersConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SmolDoomersConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SmolDoomers__factory extends ContractFactory {
  constructor(...args: SmolDoomersConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SmolDoomers> {
    return super.deploy(overrides || {}) as Promise<SmolDoomers>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SmolDoomers {
    return super.attach(address) as SmolDoomers;
  }
  override connect(signer: Signer): SmolDoomers__factory {
    return super.connect(signer) as SmolDoomers__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SmolDoomersInterface {
    return new utils.Interface(_abi) as SmolDoomersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SmolDoomers {
    return new Contract(address, _abi, signerOrProvider) as SmolDoomers;
  }
}
