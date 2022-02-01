/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MesonHelpersTestInterface extends utils.Interface {
  functions: {
    "checkReleaseSignature(bytes32,address,address,bytes32,bytes32,uint8)": FunctionFragment;
    "checkRequestSignature(bytes32,address,bytes32,bytes32,uint8)": FunctionFragment;
    "decodeSwap(uint256)": FunctionFragment;
    "encodeSwap(uint128,uint40,uint40,bytes4,uint8,uint8)": FunctionFragment;
    "getCoinType()": FunctionFragment;
    "getSwapId(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "checkReleaseSignature",
    values: [BytesLike, string, string, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkRequestSignature",
    values: [BytesLike, string, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "decodeSwap",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "encodeSwap",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getCoinType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSwapId",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "checkReleaseSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkRequestSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decodeSwap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "encodeSwap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCoinType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getSwapId", data: BytesLike): Result;

  events: {};
}

export interface MesonHelpersTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MesonHelpersTestInterface;

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
    checkReleaseSignature(
      swapId: BytesLike,
      recipient: string,
      signer: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    checkRequestSignature(
      swapId: BytesLike,
      signer: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    decodeSwap(
      encodedSwap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number, number] & {
        amount: BigNumber;
        expireTs: number;
        inTokenIndex: number;
        outTokenIndex: number;
      }
    >;

    encodeSwap(
      amount: BigNumberish,
      fee: BigNumberish,
      expireTs: BigNumberish,
      outChain: BytesLike,
      outToken: BigNumberish,
      inToken: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getCoinType(overrides?: CallOverrides): Promise<[string]>;

    getSwapId(
      encodedSwap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  checkReleaseSignature(
    swapId: BytesLike,
    recipient: string,
    signer: string,
    r: BytesLike,
    s: BytesLike,
    v: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  checkRequestSignature(
    swapId: BytesLike,
    signer: string,
    r: BytesLike,
    s: BytesLike,
    v: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  decodeSwap(
    encodedSwap: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, number, number] & {
      amount: BigNumber;
      expireTs: number;
      inTokenIndex: number;
      outTokenIndex: number;
    }
  >;

  encodeSwap(
    amount: BigNumberish,
    fee: BigNumberish,
    expireTs: BigNumberish,
    outChain: BytesLike,
    outToken: BigNumberish,
    inToken: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getCoinType(overrides?: CallOverrides): Promise<string>;

  getSwapId(
    encodedSwap: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    checkReleaseSignature(
      swapId: BytesLike,
      recipient: string,
      signer: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    checkRequestSignature(
      swapId: BytesLike,
      signer: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    decodeSwap(
      encodedSwap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number, number] & {
        amount: BigNumber;
        expireTs: number;
        inTokenIndex: number;
        outTokenIndex: number;
      }
    >;

    encodeSwap(
      amount: BigNumberish,
      fee: BigNumberish,
      expireTs: BigNumberish,
      outChain: BytesLike,
      outToken: BigNumberish,
      inToken: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getCoinType(overrides?: CallOverrides): Promise<string>;

    getSwapId(
      encodedSwap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    checkReleaseSignature(
      swapId: BytesLike,
      recipient: string,
      signer: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkRequestSignature(
      swapId: BytesLike,
      signer: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decodeSwap(
      encodedSwap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    encodeSwap(
      amount: BigNumberish,
      fee: BigNumberish,
      expireTs: BigNumberish,
      outChain: BytesLike,
      outToken: BigNumberish,
      inToken: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCoinType(overrides?: CallOverrides): Promise<BigNumber>;

    getSwapId(
      encodedSwap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checkReleaseSignature(
      swapId: BytesLike,
      recipient: string,
      signer: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkRequestSignature(
      swapId: BytesLike,
      signer: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decodeSwap(
      encodedSwap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    encodeSwap(
      amount: BigNumberish,
      fee: BigNumberish,
      expireTs: BigNumberish,
      outChain: BytesLike,
      outToken: BigNumberish,
      inToken: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCoinType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSwapId(
      encodedSwap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
