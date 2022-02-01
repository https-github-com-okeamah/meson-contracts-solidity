/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IMesonPoolsEvents,
  IMesonPoolsEventsInterface,
} from "../IMesonPoolsEvents";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "SwapLocked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "SwapReleased",
    type: "event",
  },
];

export class IMesonPoolsEvents__factory {
  static readonly abi = _abi;
  static createInterface(): IMesonPoolsEventsInterface {
    return new utils.Interface(_abi) as IMesonPoolsEventsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMesonPoolsEvents {
    return new Contract(address, _abi, signerOrProvider) as IMesonPoolsEvents;
  }
}
