/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BaseTokenURI,
  BaseTokenURIInterface,
} from "../../../../../@divergencetech/ethier/contracts/erc721/BaseTokenURI";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_baseTokenURI",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    inputs: [],
    name: "baseTokenURI",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_baseTokenURI",
        type: "string",
      },
    ],
    name: "setBaseTokenURI",
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
  "0x608060405234801561001057600080fd5b506040516107cd3803806107cd83398101604081905261002f916101af565b61003833610047565b61004181610097565b506102c9565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61009f6100b6565b80516100b2906001906020840190610116565b5050565b6000546001600160a01b031633146101145760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640160405180910390fd5b565b82805461012290610278565b90600052602060002090601f016020900481019282610144576000855561018a565b82601f1061015d57805160ff191683800117855561018a565b8280016001018555821561018a579182015b8281111561018a57825182559160200191906001019061016f565b5061019692915061019a565b5090565b5b80821115610196576000815560010161019b565b600060208083850312156101c1578182fd5b82516001600160401b03808211156101d7578384fd5b818501915085601f8301126101ea578384fd5b8151818111156101fc576101fc6102b3565b604051601f8201601f19908116603f01168101908382118183101715610224576102246102b3565b81604052828152888684870101111561023b578687fd5b8693505b8284101561025c578484018601518185018701529285019261023f565b8284111561026c57868684830101525b98975050505050505050565b600181811c9082168061028c57607f821691505b602082108114156102ad57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6104f5806102d86000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806330176e131461005c578063715018a6146100715780638da5cb5b14610079578063d547cfb714610099578063f2fde38b146100ae575b600080fd5b61006f61006a366004610371565b6100c1565b005b61006f6100e0565b6000546040516001600160a01b0390911681526020015b60405180910390f35b6100a16100f4565b604051610090919061041b565b61006f6100bc366004610343565b610182565b6100c9610200565b80516100dc9060019060208401906102aa565b5050565b6100e8610200565b6100f2600061025a565b565b600180546101019061046e565b80601f016020809104026020016040519081016040528092919081815260200182805461012d9061046e565b801561017a5780601f1061014f5761010080835404028352916020019161017a565b820191906000526020600020905b81548152906001019060200180831161015d57829003601f168201915b505050505081565b61018a610200565b6001600160a01b0381166101f45760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6101fd8161025a565b50565b6000546001600160a01b031633146100f25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101eb565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8280546102b69061046e565b90600052602060002090601f0160209004810192826102d8576000855561031e565b82601f106102f157805160ff191683800117855561031e565b8280016001018555821561031e579182015b8281111561031e578251825591602001919060010190610303565b5061032a92915061032e565b5090565b5b8082111561032a576000815560010161032f565b600060208284031215610354578081fd5b81356001600160a01b038116811461036a578182fd5b9392505050565b600060208284031215610382578081fd5b813567ffffffffffffffff80821115610399578283fd5b818401915084601f8301126103ac578283fd5b8135818111156103be576103be6104a9565b604051601f8201601f19908116603f011681019083821181831017156103e6576103e66104a9565b816040528281528760208487010111156103fe578586fd5b826020860160208301379182016020019490945295945050505050565b6000602080835283518082850152825b818110156104475785810183015185820160400152820161042b565b818111156104585783604083870101525b50601f01601f1916929092016040019392505050565b600181811c9082168061048257607f821691505b602082108114156104a357634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fdfea26469706673582212202c155b862312febd99cb4c8a32051f8da557da178826fca4831d0418e7069ca264736f6c63430008040033";

type BaseTokenURIConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BaseTokenURIConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BaseTokenURI__factory extends ContractFactory {
  constructor(...args: BaseTokenURIConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _baseTokenURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BaseTokenURI> {
    return super.deploy(
      _baseTokenURI,
      overrides || {}
    ) as Promise<BaseTokenURI>;
  }
  override getDeployTransaction(
    _baseTokenURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_baseTokenURI, overrides || {});
  }
  override attach(address: string): BaseTokenURI {
    return super.attach(address) as BaseTokenURI;
  }
  override connect(signer: Signer): BaseTokenURI__factory {
    return super.connect(signer) as BaseTokenURI__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseTokenURIInterface {
    return new utils.Interface(_abi) as BaseTokenURIInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseTokenURI {
    return new Contract(address, _abi, signerOrProvider) as BaseTokenURI;
  }
}