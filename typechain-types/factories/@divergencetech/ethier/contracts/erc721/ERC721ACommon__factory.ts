/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721ACommon,
  ERC721ACommonInterface,
} from "../../../../../@divergencetech/ethier/contracts/erc721/ERC721ACommon";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ApprovalCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "ApproveToCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceQueryForZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintERC2309QuantityExceedsLimit",
    type: "error",
  },
  {
    inputs: [],
    name: "MintToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintZeroQuantity",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnershipNotInitializedForExtraData",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFromIncorrectOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToNonERC721ReceiverImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "URIQueryForNonexistentToken",
    type: "error",
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
        internalType: "uint256",
        name: "fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toTokenId",
        type: "uint256",
      },
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
    ],
    name: "ConsecutiveTransfer",
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
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    name: "renounceOwnership",
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
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620017923803806200179283398101604081905262000034916200024f565b8151829082906200004d906002906020850190620000dc565b50805162000063906003906020840190620000dc565b5050600080555062000075336200008a565b50506009805460ff60a01b19169055620002f5565b600980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620000ea90620002b9565b90600052602060002090601f0160209004810192826200010e576000855562000159565b82601f106200012957805160ff191683800117855562000159565b8280016001018555821562000159579182015b82811115620001595782518255916020019190600101906200013c565b50620001679291506200016b565b5090565b5b808211156200016757600081556001016200016c565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001aa57600080fd5b81516001600160401b0380821115620001c757620001c762000182565b604051601f8301601f19908116603f01168101908282118183101715620001f257620001f262000182565b816040528381526020925086838588010111156200020f57600080fd5b600091505b8382101562000233578582018301518183018401529082019062000214565b83821115620002455760008385830101525b9695505050505050565b600080604083850312156200026357600080fd5b82516001600160401b03808211156200027b57600080fd5b620002898683870162000198565b93506020850151915080821115620002a057600080fd5b50620002af8582860162000198565b9150509250929050565b600181811c90821680620002ce57607f821691505b602082108103620002ef57634e487b7160e01b600052602260045260246000fd5b50919050565b61148d80620003056000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806370a08231116100ad578063a22cb46511610071578063a22cb46514610253578063b88d4fde14610266578063c87b56dd14610279578063e985e9c51461028c578063f2fde38b1461029f57600080fd5b806370a0823114610217578063715018a61461022a5780638456cb59146102325780638da5cb5b1461023a57806395d89b411461024b57600080fd5b806323b872dd116100f457806323b872dd146101c45780633f4ba83a146101d757806342842e0e146101df5780635c975abb146101f25780636352211e1461020457600080fd5b806301ffc9a71461013157806306fdde0314610159578063081812fc1461016e578063095ea7b31461019957806318160ddd146101ae575b600080fd5b61014461013f3660046110bf565b6102b2565b60405190151581526020015b60405180910390f35b6101616102c3565b6040516101509190611134565b61018161017c366004611147565b610355565b6040516001600160a01b039091168152602001610150565b6101ac6101a7366004611175565b610399565b005b600154600054035b604051908152602001610150565b6101ac6101d23660046111a1565b610439565b6101ac6105de565b6101ac6101ed3660046111a1565b6105f0565b600954600160a01b900460ff16610144565b610181610212366004611147565b610610565b6101b66102253660046111e2565b61061b565b6101ac61066a565b6101ac61067c565b6009546001600160a01b0316610181565b61016161068c565b6101ac6102613660046111ff565b61069b565b6101ac610274366004611253565b610760565b610161610287366004611147565b6107aa565b61014461029a366004611333565b61083b565b6101ac6102ad3660046111e2565b6108b2565b60006102bd82610930565b92915050565b6060600280546102d290611361565b80601f01602080910402602001604051908101604052809291908181526020018280546102fe90611361565b801561034b5780601f106103205761010080835404028352916020019161034b565b820191906000526020600020905b81548152906001019060200180831161032e57829003601f168201915b5050505050905090565b60006103608261097e565b61037d576040516333d1c03960e21b815260040160405180910390fd5b506000908152600660205260409020546001600160a01b031690565b60006103a482610610565b9050336001600160a01b038216146103dd576103c0813361083b565b6103dd576040516367d9dca160e11b815260040160405180910390fd5b60008281526006602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6000610444826109a5565b9050836001600160a01b0316816001600160a01b0316146104775760405162a1148160e81b815260040160405180910390fd5b60008281526006602052604090208054338082146001600160a01b038816909114176104c4576104a7863361083b565b6104c457604051632ce44b5f60e11b815260040160405180910390fd5b6001600160a01b0385166104eb57604051633a954ecd60e21b815260040160405180910390fd5b6104f88686866001610a0c565b801561050357600082555b6001600160a01b038681166000908152600560205260408082208054600019019055918716808252919020805460010190554260a01b17600160e11b17600085815260046020526040812091909155600160e11b84169003610595576001840160008181526004602052604081205490036105935760005481146105935760008181526004602052604090208490555b505b83856001600160a01b0316876001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050505050565b6105e6610a6a565b6105ee610ac4565b565b61060b83838360405180602001604052806000815250610760565b505050565b60006102bd826109a5565b60006001600160a01b038216610644576040516323d3ad8160e21b815260040160405180910390fd5b506001600160a01b031660009081526005602052604090205467ffffffffffffffff1690565b610672610a6a565b6105ee6000610b19565b610684610a6a565b6105ee610b6b565b6060600380546102d290611361565b336106a581610bae565b6001600160a01b0316836001600160a01b03160361075657816106c95760016106cc565b60005b6001600160a01b0382166000908152600860205260409020805460ff1916600183818111156106fd576106fd61139b565b0217905550826001600160a01b0316816001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3184604051610749911515815260200190565b60405180910390a3505050565b61060b8383610d0d565b61076b848484610439565b6001600160a01b0383163b156107a45761078784848484610da2565b6107a4576040516368d2bf6b60e11b815260040160405180910390fd5b50505050565b60606107b58261097e565b6107d257604051630a14c4b560e41b815260040160405180910390fd5b60006107e960408051602081019091526000815290565b905080516000036108095760405180602001604052806000815250610834565b8061081384610e8d565b6040516020016108249291906113b1565b6040516020818303038152906040525b9392505050565b6001600160a01b03808316600090815260076020908152604080832093851683529290529081205460ff1615610873575060016102bd565b6001600160a01b03831660009081526008602052604081205460ff1660018111156108a0576108a061139b565b14801561083457506108348383610edc565b6108ba610a6a565b6001600160a01b0381166109245760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61092d81610b19565b50565b60006301ffc9a760e01b6001600160e01b03198316148061096157506380ac58cd60e01b6001600160e01b03198316145b806102bd5750506001600160e01b031916635b5e139f60e01b1490565b60008054821080156102bd575050600090815260046020526040902054600160e01b161590565b6000816000548110156109f35760008181526004602052604081205490600160e01b821690036109f1575b806000036108345750600019016000818152600460205260409020546109d0565b505b604051636f96cda160e11b815260040160405180910390fd5b600954600160a01b900460ff1615610a5e5760405162461bcd60e51b8152602060048201526015602482015274115490cdcc8c5050dbdb5b5bdb8e881c185d5cd959605a1b604482015260640161091b565b6107a484848484610f1a565b6009546001600160a01b031633146105ee5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161091b565b610acc61100c565b6009805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b610b7361105c565b6009805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610afc3390565b600080468060018114610be35760898114610bff5760048114610c1b57620138818114610c37576105398114610c5357610c6b565b73a5409ec958c83c3f309868babaca7c86dcb077c19250610c6b565b7358807bad0b376efc12f5ad86aac70e78ed67deae9250610c6b565b73f57b2c51ded3a29e6891aba85459d600256cf3179250610c6b565b73ff7ca10af37178bdd056628ef42fd7f799fac77c9250610c6b565b73e1a2bbc877b29adbc56d2659dbcb0ae14ee6207192505b506001600160a01b0382161580610c825750806089145b80610c8f57508062013881145b15610c9b575092915050565b60405163c455279160e01b81526001600160a01b03858116600483015283169063c455279190602401602060405180830381865afa158015610ce1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0591906113e0565b949350505050565b336001600160a01b03831603610d365760405163b06307db60e01b815260040160405180910390fd5b3360008181526007602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a0290610dd79033908990889088906004016113fd565b6020604051808303816000875af1925050508015610e12575060408051601f3d908101601f19168201909252610e0f9181019061143a565b60015b610e70573d808015610e40576040519150601f19603f3d011682016040523d82523d6000602084013e610e45565b606091505b508051600003610e68576040516368d2bf6b60e11b815260040160405180910390fd5b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050949350505050565b604080516080810191829052607f0190826030600a8206018353600a90045b8015610eca57600183039250600a81066030018353600a9004610eac565b50819003601f19909101908152919050565b600080610ee884610bae565b90506001600160a01b03811615801590610d055750826001600160a01b0316816001600160a01b031614949350505050565b6001600160a01b0383161580610f5c575060016001600160a01b03841660009081526008602052604090205460ff166001811115610f5a57610f5a61139b565b145b6107a4576000610f6b84610bae565b90506001600160a01b038116610fa457506001600160a01b0383166000908152600860205260409020805460ff191660011790556107a4565b610fad8461061b565b60000361100557806001600160a01b0316846001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c316001604051610ffc911515815260200190565b60405180910390a35b5050505050565b600954600160a01b900460ff166105ee5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015260640161091b565b600954600160a01b900460ff16156105ee5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640161091b565b6001600160e01b03198116811461092d57600080fd5b6000602082840312156110d157600080fd5b8135610834816110a9565b60005b838110156110f75781810151838201526020016110df565b838111156107a45750506000910152565b600081518084526111208160208601602086016110dc565b601f01601f19169290920160200192915050565b6020815260006108346020830184611108565b60006020828403121561115957600080fd5b5035919050565b6001600160a01b038116811461092d57600080fd5b6000806040838503121561118857600080fd5b823561119381611160565b946020939093013593505050565b6000806000606084860312156111b657600080fd5b83356111c181611160565b925060208401356111d181611160565b929592945050506040919091013590565b6000602082840312156111f457600080fd5b813561083481611160565b6000806040838503121561121257600080fd5b823561121d81611160565b91506020830135801515811461123257600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561126957600080fd5b843561127481611160565b9350602085013561128481611160565b925060408501359150606085013567ffffffffffffffff808211156112a857600080fd5b818701915087601f8301126112bc57600080fd5b8135818111156112ce576112ce61123d565b604051601f8201601f19908116603f011681019083821181831017156112f6576112f661123d565b816040528281528a602084870101111561130f57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561134657600080fd5b823561135181611160565b9150602083013561123281611160565b600181811c9082168061137557607f821691505b60208210810361139557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052602160045260246000fd5b600083516113c38184602088016110dc565b8351908301906113d78183602088016110dc565b01949350505050565b6000602082840312156113f257600080fd5b815161083481611160565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061143090830184611108565b9695505050505050565b60006020828403121561144c57600080fd5b8151610834816110a956fea2646970667358221220ab0bf109a1e15eb34cb97c6443275a4c3864adc39f1cde1a5c3785b66fc7bff164736f6c634300080d0033";

type ERC721ACommonConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ACommonConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721ACommon__factory extends ContractFactory {
  constructor(...args: ERC721ACommonConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721ACommon> {
    return super.deploy(
      name,
      symbol,
      overrides || {}
    ) as Promise<ERC721ACommon>;
  }
  override getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): ERC721ACommon {
    return super.attach(address) as ERC721ACommon;
  }
  override connect(signer: Signer): ERC721ACommon__factory {
    return super.connect(signer) as ERC721ACommon__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721ACommonInterface {
    return new utils.Interface(_abi) as ERC721ACommonInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721ACommon {
    return new Contract(address, _abi, signerOrProvider) as ERC721ACommon;
  }
}
