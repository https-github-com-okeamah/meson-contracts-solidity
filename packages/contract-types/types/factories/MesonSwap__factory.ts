/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MesonSwap, MesonSwapInterface } from "../MesonSwap";

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
    name: "SwapCancelled",
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
    name: "SwapExecuted",
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
      {
        indexed: false,
        internalType: "uint256",
        name: "ts",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "inToken",
        type: "address",
      },
    ],
    name: "SwapPosted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "cancelSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
    ],
    name: "executeSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentChain",
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
        internalType: "bytes",
        name: "encodedSwap",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "inToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
    ],
    name: "postSwap",
    outputs: [
      {
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "requests",
    outputs: [
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "expireTs",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "inToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
        name: "",
        type: "address",
      },
    ],
    name: "supportedTokens",
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
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "totalDemandFor",
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
        name: "token",
        type: "address",
      },
    ],
    name: "totalSupplyFor",
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
];

const _bytecode =
  "0x61010060405260526080818152906110af60a039805160209182012060408051808201825260088152674d65736f6e20466960c01b908401528051808201825260018152603160f81b908401528051928301919091527fe127d7b8d403871d7ed6b19024db4422e92aee79823ba78ad61e52ee2a5f9b98908201527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc66060820152600360808201523060a082015260c001604051602081830303815290604052805190602001206000553480156100d557600080fd5b50610fca806100e56000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80639d8669851161005b5780639d86698514610126578063a8f81b1a146101a9578063bcc20ff6146101d2578063d541beb3146101e557600080fd5b80633ce758b51461008d57806361565d25146100a257806368c4ac26146100de57806372cbf72e14610111575b600080fd5b6100a061009b366004610d3d565b6101f8565b005b6100cb6100b0366004610ce0565b6001600160a01b031660009081526004602052604090205490565b6040519081526020015b60405180910390f35b6101016100ec366004610ce0565b60016020526000908152604090205460ff1681565b60405190151581526020016100d5565b604051632000000f60e21b81526020016100d5565b610172610134366004610d24565b600660205260009081526040902080546001820154600283015460038401546004909401546001600160a01b03938416949284169391929091169085565b604080516001600160a01b03968716815294861660208601528401929092529092166060820152608081019190915260a0016100d5565b6100cb6101b7366004610ce0565b6001600160a01b031660009081526005602052604090205490565b6100cb6101e0366004610de8565b610350565b6100a06101f3366004610d24565b610712565b600084815260066020526040902060040154849061024e5760405162461bcd60e51b815260206004820152600e60248201526d1cddd85c081b9bdd08199bdd5b9960921b60448201526064015b60405180910390fd5b600085815260066020908152604091829020825160a08101845281546001600160a01b039081168083526001840154821694830194909452600283015494820194909452600382015490931660608401526004015460808301526102b6908790878787610852565b6080810151606082015160208084015160008a815260069092526040822080546001600160a01b0319908116825560018201805482169055600282018490556003820180549091169055600401919091556103128282856108ef565b6040518981527f6921a2110a802468e8955f2885822155442ad19c60f42db0444a6993c23d20629060200160405180910390a1505050505050505050565b6001600160a01b038516600090815260016020526040812054869060ff166103ae5760405162461bcd60e51b81526020600482015260116024820152703ab739bab83837b93a32b2103a37b5b2b760791b6044820152606401610245565b60008060006103bc8b610a2c565b6040516bffffffffffffffffffffffff1960608f901b1660208201529295509093509150829060340160405160208183030381529060405280519060200120146104415760405162461bcd60e51b81526020600482015260166024820152750d2dca8ded6cadc40c8decae640dcdee840dac2e8c6d60531b6044820152606401610245565b6000811161049f5760405162461bcd60e51b815260206004820152602560248201527f7377617020616d6f756e74206d7573742062652067726561746572207468616e604482015264207a65726f60d81b6064820152608401610245565b426104ac81610e10610f18565b84116104f15760405162461bcd60e51b81526020600482015260146024820152736578706972657320747320746f6f206561726c7960601b6044820152606401610245565b6104fd81611c20610f18565b84106105415760405162461bcd60e51b81526020600482015260136024820152726578706972657320747320746f6f206c61746560681b6044820152606401610245565b6000338d5160208f01209750905061056a87600090815260066020526040902060040154151590565b156105a75760405162461bcd60e51b815260206004820152600d60248201526c1cddd85c0818dbdb999b1a58dd609a1b6044820152606401610245565b6105b4878c8c8c8c610ad2565b6040518060a001604052808c6001600160a01b03168152602001826001600160a01b031681526020018681526020018d6001600160a01b03168152602001848152506006600089815260200190815260200160002060008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060208201518160010160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506040820151816002015560608201518160030160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550608082015181600401559050506106b28c8c85610adf565b60408051888152602081018490529081018490526001600160a01b038d1660608201527ff60f3861c423568d0aae6a3a3bc9d4b41c40ab0cb0267599d9d35122e4f320e89060800160405180910390a15050505050509695505050505050565b60008181526006602052604090206004015481906107635760405162461bcd60e51b815260206004820152600e60248201526d1cddd85c081b9bdd08199bdd5b9960921b6044820152606401610245565b600082815260066020526040902060020154829042116107b85760405162461bcd60e51b815260206004820152601060248201526f1cddd85c081b9bdd08195e1c1a5c995960821b6044820152606401610245565b600083815260066020526040812060038101805482546004840180546001600160a01b03198084168755600187018054821690556002909601879055948316909355939091556001600160a01b039081169216906108178383836108ef565b6040518681527f5a399591cfd74c375a1ffd61c20221db0db82381f65516889ed13c8cd1f99d5b9060200160405180910390a1505050505050565b604080518082018252601b81527f5377617052656c6561736528627974657333322073776170496429000000000060209182015290516000916108c2917ffb1f98601c589a04e2ceca199119c17bd547893fffb8d088acdae5aff4f9b19d91899101918252602082015260400190565b6040516020818303038152906040528051906020012090506108e78186868686610b6d565b505050505050565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b1790529151600092839287169161097b9190610edd565b6000604051808303816000865af19150503d80600081146109b8576040519150601f19603f3d011682016040523d82523d6000602084013e6109bd565b606091505b50915091508180156109e75750805115806109e75750808060200190518101906109e79190610d02565b610a255760405162461bcd60e51b815260206004820152600f60248201526e1d1c985b9cd9995c8819985a5b1959608a1b6044820152606401610245565b5050505050565b600080600080600080600087806020019051810190610a4b9190610d7c565b50505093509350935093506040518060a0016040528060698152602001610f5560699139805190602001208414610ac45760405162461bcd60e51b815260206004820152601d60248201527f496e76616c6964207377617020726571756573742074797065686173680000006044820152606401610245565b919790965090945092505050565b610a258585858585610b6d565b6040516323b872dd60e01b81526001600160a01b038381166004830152306024830152604482018390528416906323b872dd90606401602060405180830381600087803b158015610b2f57600080fd5b505af1158015610b43573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b679190610d02565b50505050565b6000805460405161190160f01b602082015260228101919091526042810187905260620160408051601f19818403018152919052805160209091012090506001600160a01b038516610c015760405162461bcd60e51b815260206004820152601e60248201527f7369676e65722063616e6e6f7420626520656d707479206164647265737300006044820152606401610245565b60408051600081526020810180835283905260ff841691810191909152606081018590526080810184905260019060a0016020604051602081039080840390855afa158015610c54573d6000803e3d6000fd5b505050602060405103516001600160a01b0316856001600160a01b0316146108e75760405162461bcd60e51b8152602060048201526012602482015271696e76616c6964207369676e61747572657360701b6044820152606401610245565b80356001600160a01b0381168114610cca57600080fd5b919050565b803560ff81168114610cca57600080fd5b600060208284031215610cf257600080fd5b610cfb82610cb3565b9392505050565b600060208284031215610d1457600080fd5b81518015158114610cfb57600080fd5b600060208284031215610d3657600080fd5b5035919050565b60008060008060808587031215610d5357600080fd5b843593506020850135925060408501359150610d7160608601610ccf565b905092959194509250565b600080600080600080600060e0888a031215610d9757600080fd5b87519650602088015195506040880151945060608801519350608088015163ffffffff60e01b81168114610dca57600080fd5b8093505060a0880151915060c0880151905092959891949750929550565b60008060008060008060c08789031215610e0157600080fd5b863567ffffffffffffffff80821115610e1957600080fd5b818901915089601f830112610e2d57600080fd5b813581811115610e3f57610e3f610f3e565b604051601f8201601f19908116603f01168101908382118183101715610e6757610e67610f3e565b816040528281528c6020848701011115610e8057600080fd5b82602086016020830137600060208483010152809a505050505050610ea760208801610cb3565b9450610eb560408801610cb3565b93506060870135925060808701359150610ed160a08801610ccf565b90509295509295509295565b6000825160005b81811015610efe5760208186018101518583015201610ee4565b81811115610f0d576000828501525b509190910192915050565b60008219821115610f3957634e487b7160e01b600052601160045260246000fd5b500190565b634e487b7160e01b600052604160045260246000fdfe53776170526571756573742875696e743235362065787069726554732c627974657320696e546f6b656e2c75696e7432353620616d6f756e742c627974657334206f7574436861696e2c6279746573206f7574546f6b656e2c627974657320726563697069656e7429a164736f6c6343000806000a454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429";

type MesonSwapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MesonSwapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MesonSwap__factory extends ContractFactory {
  constructor(...args: MesonSwapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MesonSwap> {
    return super.deploy(overrides || {}) as Promise<MesonSwap>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MesonSwap {
    return super.attach(address) as MesonSwap;
  }
  connect(signer: Signer): MesonSwap__factory {
    return super.connect(signer) as MesonSwap__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MesonSwapInterface {
    return new utils.Interface(_abi) as MesonSwapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MesonSwap {
    return new Contract(address, _abi, signerOrProvider) as MesonSwap;
  }
}
