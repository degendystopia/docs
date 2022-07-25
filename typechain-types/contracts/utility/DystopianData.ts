/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export type PositionStruct = { x: BigNumberish; y: BigNumberish };

export type PositionStructOutput = [number, number] & { x: number; y: number };

export type StatsStruct = {
  maxHealth: BigNumberish;
  maxEnergy: BigNumberish;
  speed: BigNumberish;
  range: BigNumberish;
};

export type StatsStructOutput = [number, number, number, number] & {
  maxHealth: number;
  maxEnergy: number;
  speed: number;
  range: number;
};

export type SkillStruct = { name: string; level: BigNumberish };

export type SkillStructOutput = [string, number] & {
  name: string;
  level: number;
};

export type StatusStruct = {
  curHealth: BigNumberish;
  curEnergy: BigNumberish;
  deaths: BigNumberish;
  kills: BigNumberish;
  murders: BigNumberish;
  isCriminal: boolean;
};

export type StatusStructOutput = [
  number,
  number,
  number,
  number,
  number,
  boolean
] & {
  curHealth: number;
  curEnergy: number;
  deaths: number;
  kills: number;
  murders: number;
  isCriminal: boolean;
};

export type CharacterStruct = {
  pos: PositionStruct;
  stats: StatsStruct;
  skills: SkillStruct[];
  status: StatusStruct;
};

export type CharacterStructOutput = [
  PositionStructOutput,
  StatsStructOutput,
  SkillStructOutput[],
  StatusStructOutput
] & {
  pos: PositionStructOutput;
  stats: StatsStructOutput;
  skills: SkillStructOutput[];
  status: StatusStructOutput;
};

export type DystopianStruct = { char: CharacterStruct };

export type DystopianStructOutput = [CharacterStructOutput] & {
  char: CharacterStructOutput;
};

export interface DystopianDataInterface extends utils.Interface {
  functions: {
    "bytes32ToLiteralString(bytes32)": FunctionFragment;
    "getDystopianData(uint256)": FunctionFragment;
    "getDystopianName()": FunctionFragment;
    "getEthSignedMessageHash(bytes32)": FunctionFragment;
    "getNextHash(uint256,(((uint16,uint16),(uint16,uint16,uint16,uint16),(string,uint16)[],(uint16,uint16,uint16,uint16,uint16,bool))))": FunctionFragment;
    "getSigner(bytes32,bytes)": FunctionFragment;
    "rename(string)": FunctionFragment;
    "updateDystopianData(uint256,(((uint16,uint16),(uint16,uint16,uint16,uint16),(string,uint16)[],(uint16,uint16,uint16,uint16,uint16,bool))),bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bytes32ToLiteralString"
      | "getDystopianData"
      | "getDystopianName"
      | "getEthSignedMessageHash"
      | "getNextHash"
      | "getSigner"
      | "rename"
      | "updateDystopianData"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "bytes32ToLiteralString",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getDystopianData",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getDystopianName",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEthSignedMessageHash",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getNextHash",
    values: [BigNumberish, DystopianStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getSigner",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "rename", values: [string]): string;
  encodeFunctionData(
    functionFragment: "updateDystopianData",
    values: [BigNumberish, DystopianStruct, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "bytes32ToLiteralString",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDystopianData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDystopianName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEthSignedMessageHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNextHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getSigner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rename", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateDystopianData",
    data: BytesLike
  ): Result;

  events: {
    "DystopianDataUpdated(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DystopianDataUpdated"): EventFragment;
}

export interface DystopianDataUpdatedEventObject {
  world: BigNumber;
  nonce: BigNumber;
}
export type DystopianDataUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber],
  DystopianDataUpdatedEventObject
>;

export type DystopianDataUpdatedEventFilter =
  TypedEventFilter<DystopianDataUpdatedEvent>;

export interface DystopianData extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DystopianDataInterface;

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
    bytes32ToLiteralString(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { result: string }>;

    getDystopianData(
      _world: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[DystopianStructOutput]>;

    getDystopianName(overrides?: CallOverrides): Promise<[string]>;

    getEthSignedMessageHash(
      _messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getNextHash(
      _world: BigNumberish,
      _data: DystopianStruct,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getSigner(
      hash_: BytesLike,
      signature_: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string, string]>;

    rename(
      _name: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateDystopianData(
      _world: BigNumberish,
      _data: DystopianStruct,
      _worldSignature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  bytes32ToLiteralString(
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getDystopianData(
    _world: BigNumberish,
    overrides?: CallOverrides
  ): Promise<DystopianStructOutput>;

  getDystopianName(overrides?: CallOverrides): Promise<string>;

  getEthSignedMessageHash(
    _messageHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getNextHash(
    _world: BigNumberish,
    _data: DystopianStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  getSigner(
    hash_: BytesLike,
    signature_: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, string, string]>;

  rename(
    _name: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateDystopianData(
    _world: BigNumberish,
    _data: DystopianStruct,
    _worldSignature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    bytes32ToLiteralString(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getDystopianData(
      _world: BigNumberish,
      overrides?: CallOverrides
    ): Promise<DystopianStructOutput>;

    getDystopianName(overrides?: CallOverrides): Promise<string>;

    getEthSignedMessageHash(
      _messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getNextHash(
      _world: BigNumberish,
      _data: DystopianStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    getSigner(
      hash_: BytesLike,
      signature_: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string, string]>;

    rename(_name: string, overrides?: CallOverrides): Promise<void>;

    updateDystopianData(
      _world: BigNumberish,
      _data: DystopianStruct,
      _worldSignature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "DystopianDataUpdated(uint256,uint256)"(
      world?: BigNumberish | null,
      nonce?: null
    ): DystopianDataUpdatedEventFilter;
    DystopianDataUpdated(
      world?: BigNumberish | null,
      nonce?: null
    ): DystopianDataUpdatedEventFilter;
  };

  estimateGas: {
    bytes32ToLiteralString(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDystopianData(
      _world: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDystopianName(overrides?: CallOverrides): Promise<BigNumber>;

    getEthSignedMessageHash(
      _messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNextHash(
      _world: BigNumberish,
      _data: DystopianStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSigner(
      hash_: BytesLike,
      signature_: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rename(
      _name: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateDystopianData(
      _world: BigNumberish,
      _data: DystopianStruct,
      _worldSignature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bytes32ToLiteralString(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDystopianData(
      _world: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDystopianName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEthSignedMessageHash(
      _messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNextHash(
      _world: BigNumberish,
      _data: DystopianStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSigner(
      hash_: BytesLike,
      signature_: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rename(
      _name: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateDystopianData(
      _world: BigNumberish,
      _data: DystopianStruct,
      _worldSignature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}