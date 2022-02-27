import { PartialSwapData, SwapData } from '../..'

export function getPartialSwap({
  amount = '100',
  fee = '10',
  inToken = 1,
  outToken = 1,
} = {}): PartialSwapData {
  return {
    amount,
    fee,
    inToken,
    outToken,
    recipient: '0x2ef8a51f8ff129dbb874a0efb021702f59c1b211',
  }
}

export function getSwap({
  amount = '100',
  fee = '10',
  expireTs = Math.floor(Date.now() / 1000) + 5400,
  inChain = '0x0000',
  inToken = 1,
  outChain = '0x0001',
  outToken = 1,
} = {}): SwapData {
  return {
    amount,
    fee,
    expireTs,
    inChain,
    inToken,
    outChain,
    outToken,
  }
}
