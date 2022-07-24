/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  OwnerPausable,
  OwnerPausableInterface,
} from "../../../../../@divergencetech/ethier/contracts/utils/OwnerPausable";

const _abi = [
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
  "0x608060405234801561001057600080fd5b5061001a3361002c565b6000805460ff60a01b1916905561007c565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6103c68061008b6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80633f4ba83a146100675780635c975abb14610071578063715018a6146100935780638456cb591461009b5780638da5cb5b146100a3578063f2fde38b146100be575b600080fd5b61006f6100d1565b005b600054600160a01b900460ff1660405190151581526020015b60405180910390f35b61006f6100e3565b61006f6100f5565b6000546040516001600160a01b03909116815260200161008a565b61006f6100cc366004610362565b610105565b6100d9610183565b6100e16101dd565b565b6100eb610183565b6100e16000610232565b6100fd610183565b6100e1610282565b61010d610183565b6001600160a01b0381166101775760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61018081610232565b50565b6000546001600160a01b031633146100e15760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161016e565b6101e56102c5565b6000805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61028a610315565b6000805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586102153390565b600054600160a01b900460ff166100e15760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015260640161016e565b600054600160a01b900460ff16156100e15760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640161016e565b600060208284031215610373578081fd5b81356001600160a01b0381168114610389578182fd5b939250505056fea2646970667358221220f9b5a3f2276aa7c88749a32fda5f82791bc30c99e990dd421c9f658910bb8bc264736f6c63430008040033";

type OwnerPausableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OwnerPausableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OwnerPausable__factory extends ContractFactory {
  constructor(...args: OwnerPausableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OwnerPausable> {
    return super.deploy(overrides || {}) as Promise<OwnerPausable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OwnerPausable {
    return super.attach(address) as OwnerPausable;
  }
  override connect(signer: Signer): OwnerPausable__factory {
    return super.connect(signer) as OwnerPausable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OwnerPausableInterface {
    return new utils.Interface(_abi) as OwnerPausableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OwnerPausable {
    return new Contract(address, _abi, signerOrProvider) as OwnerPausable;
  }
}
