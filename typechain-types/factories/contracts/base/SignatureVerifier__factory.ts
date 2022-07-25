/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  SignatureVerifier,
  SignatureVerifierInterface,
} from "../../../contracts/base/SignatureVerifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_messageHash",
        type: "bytes32",
      },
    ],
    name: "getEthSignedMessageHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash_",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "signature_",
        type: "bytes",
      },
    ],
    name: "getSigner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class SignatureVerifier__factory {
  static readonly abi = _abi;
  static createInterface(): SignatureVerifierInterface {
    return new utils.Interface(_abi) as SignatureVerifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SignatureVerifier {
    return new Contract(address, _abi, signerOrProvider) as SignatureVerifier;
  }
}