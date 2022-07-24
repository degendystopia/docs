/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export interface SignatureVerifierInterface extends utils.Interface {
  functions: {
    "getEthSignedMessageHash(bytes32)": FunctionFragment;
    "getSigner(bytes32,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getEthSignedMessageHash" | "getSigner"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getEthSignedMessageHash",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getSigner",
    values: [BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getEthSignedMessageHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getSigner", data: BytesLike): Result;

  events: {};
}

export interface SignatureVerifier extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SignatureVerifierInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getEthSignedMessageHash(
      _messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getSigner(
      hash_: BytesLike,
      signature_: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string, string]>;
  };

  getEthSignedMessageHash(
    _messageHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getSigner(
    hash_: BytesLike,
    signature_: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, string, string]>;

  callStatic: {
    getEthSignedMessageHash(
      _messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getSigner(
      hash_: BytesLike,
      signature_: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string, string]>;
  };

  filters: {};

  estimateGas: {
    getEthSignedMessageHash(
      _messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSigner(
      hash_: BytesLike,
      signature_: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getEthSignedMessageHash(
      _messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSigner(
      hash_: BytesLike,
      signature_: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
