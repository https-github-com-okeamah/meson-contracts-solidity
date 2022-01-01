/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MesonSwapInterface extends utils.Interface {
  functions: {
    "cancelSwap(bytes32)": FunctionFragment;
    "executeSwap(bytes32,bytes32,bytes32,uint8)": FunctionFragment;
    "getCurrentChain()": FunctionFragment;
    "postSwap(bytes,address,address,bytes32,bytes32,uint8)": FunctionFragment;
    "requests(bytes32)": FunctionFragment;
    "supportedTokens(address)": FunctionFragment;
    "totalDemandFor(address)": FunctionFragment;
    "totalSupplyFor(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "cancelSwap",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "executeSwap",
    values: [BytesLike, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentChain",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "postSwap",
    values: [BytesLike, string, string, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "requests", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "supportedTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalDemandFor",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupplyFor",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "cancelSwap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentChain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "postSwap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "requests", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalDemandFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupplyFor",
    data: BytesLike
  ): Result;

  events: {
    "SwapCancelled(bytes32)": EventFragment;
    "SwapExecuted(bytes32)": EventFragment;
    "SwapPosted(bytes32,uint256,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SwapCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapPosted"): EventFragment;
}

export type SwapCancelledEvent = TypedEvent<[string], { swapId: string }>;

export type SwapCancelledEventFilter = TypedEventFilter<SwapCancelledEvent>;

export type SwapExecutedEvent = TypedEvent<[string], { swapId: string }>;

export type SwapExecutedEventFilter = TypedEventFilter<SwapExecutedEvent>;

export type SwapPostedEvent = TypedEvent<
  [string, BigNumber, BigNumber, string],
  { swapId: string; ts: BigNumber; amount: BigNumber; inToken: string }
>;

export type SwapPostedEventFilter = TypedEventFilter<SwapPostedEvent>;

export interface MesonSwap extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MesonSwapInterface;

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
    cancelSwap(
      swapId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeSwap(
      swapId: BytesLike,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getCurrentChain(overrides?: CallOverrides): Promise<[string]>;

    postSwap(
      encodedSwap: BytesLike,
      inToken: string,
      initiator: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requests(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, string, BigNumber] & {
        initiator: string;
        provider: string;
        expireTs: BigNumber;
        inToken: string;
        amount: BigNumber;
      }
    >;

    supportedTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    totalDemandFor(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalSupplyFor(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  cancelSwap(
    swapId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeSwap(
    swapId: BytesLike,
    r: BytesLike,
    s: BytesLike,
    v: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getCurrentChain(overrides?: CallOverrides): Promise<string>;

  postSwap(
    encodedSwap: BytesLike,
    inToken: string,
    initiator: string,
    r: BytesLike,
    s: BytesLike,
    v: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requests(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, string, BigNumber] & {
      initiator: string;
      provider: string;
      expireTs: BigNumber;
      inToken: string;
      amount: BigNumber;
    }
  >;

  supportedTokens(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  totalDemandFor(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  totalSupplyFor(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    cancelSwap(swapId: BytesLike, overrides?: CallOverrides): Promise<void>;

    executeSwap(
      swapId: BytesLike,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getCurrentChain(overrides?: CallOverrides): Promise<string>;

    postSwap(
      encodedSwap: BytesLike,
      inToken: string,
      initiator: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    requests(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, string, BigNumber] & {
        initiator: string;
        provider: string;
        expireTs: BigNumber;
        inToken: string;
        amount: BigNumber;
      }
    >;

    supportedTokens(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    totalDemandFor(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupplyFor(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "SwapCancelled(bytes32)"(swapId?: null): SwapCancelledEventFilter;
    SwapCancelled(swapId?: null): SwapCancelledEventFilter;

    "SwapExecuted(bytes32)"(swapId?: null): SwapExecutedEventFilter;
    SwapExecuted(swapId?: null): SwapExecutedEventFilter;

    "SwapPosted(bytes32,uint256,uint256,address)"(
      swapId?: null,
      ts?: null,
      amount?: null,
      inToken?: null
    ): SwapPostedEventFilter;
    SwapPosted(
      swapId?: null,
      ts?: null,
      amount?: null,
      inToken?: null
    ): SwapPostedEventFilter;
  };

  estimateGas: {
    cancelSwap(
      swapId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeSwap(
      swapId: BytesLike,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getCurrentChain(overrides?: CallOverrides): Promise<BigNumber>;

    postSwap(
      encodedSwap: BytesLike,
      inToken: string,
      initiator: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requests(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    supportedTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalDemandFor(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupplyFor(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cancelSwap(
      swapId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeSwap(
      swapId: BytesLike,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getCurrentChain(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    postSwap(
      encodedSwap: BytesLike,
      inToken: string,
      initiator: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requests(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportedTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalDemandFor(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupplyFor(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
