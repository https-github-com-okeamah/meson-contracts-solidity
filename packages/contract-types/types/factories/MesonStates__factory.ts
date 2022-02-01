/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MesonStates, MesonStatesInterface } from "../MesonStates";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    name: "addressOfIndex",
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
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCoinType",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "indexOfAddress",
    outputs: [
      {
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "indexOfToken",
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
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
    ],
    name: "tokenForIndex",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610339806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063b3df5b3611610050578063b3df5b3614610132578063f7888aec1461018d578063ff3787191461022b57600080fd5b80631aba3a55146100775780632335093c146100b957806394149c1a14610104575b600080fd5b61009e61008536600461028d565b60046020526000908152604090205464ffffffffff1681565b60405164ffffffffff90911681526020015b60405180910390f35b6100f26100c736600461028d565b73ffffffffffffffffffffffffffffffffffffffff1660009081526002602052604090205460ff1690565b60405160ff90911681526020016100b0565b6040517f8000003c0000000000000000000000000000000000000000000000000000000081526020016100b0565b6101686101403660046102e2565b60056020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100b0565b61020a61019b3660046102af565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260026020908152604080832054939094168252600481528382205464ffffffffff1660289390931b65ff000000000016929092178152600690915220546fffffffffffffffffffffffffffffffff1690565b6040516fffffffffffffffffffffffffffffffff90911681526020016100b0565b610168610239366004610309565b60ff1660009081526001602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b803573ffffffffffffffffffffffffffffffffffffffff8116811461028857600080fd5b919050565b60006020828403121561029f57600080fd5b6102a882610264565b9392505050565b600080604083850312156102c257600080fd5b6102cb83610264565b91506102d960208401610264565b90509250929050565b6000602082840312156102f457600080fd5b813564ffffffffff811681146102a857600080fd5b60006020828403121561031b57600080fd5b813560ff811681146102a857600080fdfea164736f6c6343000806000a";

type MesonStatesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MesonStatesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MesonStates__factory extends ContractFactory {
  constructor(...args: MesonStatesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MesonStates> {
    return super.deploy(overrides || {}) as Promise<MesonStates>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MesonStates {
    return super.attach(address) as MesonStates;
  }
  connect(signer: Signer): MesonStates__factory {
    return super.connect(signer) as MesonStates__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MesonStatesInterface {
    return new utils.Interface(_abi) as MesonStatesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MesonStates {
    return new Contract(address, _abi, signerOrProvider) as MesonStates;
  }
}
