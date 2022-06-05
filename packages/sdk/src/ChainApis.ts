import type { JsonRpcProvider } from '@ethersproject/providers'

export type Block = {
  hash: string
  parentHash: string
  number: string
  timestamp: string
  transactions: Transaction[]
  uncles?: string[]
}

export type Transaction = {
  hash: string
  from: string
  to: string
  value: string
  input: string
  blockHash?: string
  blockNumber: string
  timestamp: string
}

export type Receipt = {
  status: string
  blockNumber: string
  [key: string]: any
}

export interface AbstractChainApis {
  getLatestBlock(): Promise<Block>
  getBlockTransactions(blockHashOrNumber: string | number): Promise<Block>
  getBlock(blockHashOrNumber: string | number): Promise<Block>
  getTransaction(hash: string): Promise<Transaction>
  getReceipt(hash: string): Promise<Receipt>
}

export class EthersChainApis implements AbstractChainApis {
  #provider: JsonRpcProvider

  constructor(provider: JsonRpcProvider) {
    this.#provider = provider
  }

  async getLatestBlock() {
    return await this.#provider.send('eth_getBlockByNumber', ['latest', true])
  }

  async getBlockTransactions(blockHashOrNumber: string | number) {
    if (typeof blockHashOrNumber === 'string') {
      return await this.#provider.send('eth_getBlockByHash', [blockHashOrNumber, true])
    } else {
      return await this.#provider.send('eth_getBlockByNumber', [blockHashOrNumber, true])
    }
  }

  async getBlock(blockHashOrNumber: string | number) {
    if (typeof blockHashOrNumber === 'string') {
      return await this.#provider.send('eth_getBlockByHash', [blockHashOrNumber, false])
    } else {
      return await this.#provider.send('eth_getBlockByNumber', [blockHashOrNumber, false])
    }
  }

  async getTransaction(hash: string) {
    return await this.#provider.send('eth_getTransactionByHash', [hash])
  }

  async getReceipt(hash: string) {
    return await this.#provider.send('eth_getTransactionReceipt', [hash])
  }
}


export class TronChainApis implements AbstractChainApis {
  #tronWeb: any

  constructor(tronWeb: any) {
    this.#tronWeb = tronWeb
  }

  get provider() {
    return this.#tronWeb
  }

  private formatBlock(raw: any): Block {
    return {
      hash: raw.blockID,
      parentHash: raw.block_header.raw_data.parentHash,
      number: raw.block_header.raw_data.number,
      timestamp: Math.floor(raw.block_header.raw_data.timestamp / 1000).toString(),
      transactions: raw.transactions?.map((raw: any) => this.formatTx(raw)) || []
    }
  }

  private formatTx(raw: any): Transaction {
    const {
      owner_address: from, // hex
      contract_address: to, // hex
      data: input,
    } = raw.raw_data?.contract[0]?.parameter?.value || {}

    return {
      blockHash: '', // no need
      blockNumber: '', // no need
      hash: raw.txID,
      from: this.#tronWeb.address.fromHex(from),
      to: this.#tronWeb.address.fromHex(to),
      value: '0',
      input,
      timestamp: Math.floor(raw.raw_data?.timestamp / 1000).toString()
    }
  }

  private formatReceipt(raw: any): Receipt {
    return {
      status: raw.receipt?.result === 'SUCCESS' ? '1' : '0',
      blockNumber: raw.blockNumber,
      timestamp: Math.floor(raw.blockTimeStamp / 1000).toString()
    }
  }

  async getLatestBlock() {
    const block = await this.#tronWeb.trx.getCurrentBlock()
    return this.formatBlock(block)
  }

  async getBlockTransactions(blockHashOrNumber: string | number) {
    if (typeof blockHashOrNumber === 'string') {
      const block = await this.#tronWeb.trx.getBlockByHash(blockHashOrNumber)
      return this.formatBlock(block)
    }
  }

  async getBlock(blockHashOrNumber: string | number) {
    if (typeof blockHashOrNumber === 'string') {
      const block = await this.#tronWeb.trx.getBlockByHash(blockHashOrNumber)
      return this.formatBlock(block)
    }
  }

  async getTransaction(hash: string) {
    const tx = await this.#tronWeb.trx.getTransaction(hash)
    return this.formatTx(tx)
  }

  async getReceipt(hash: string) {
    const receipt = await this.#tronWeb.trx.getUnconfirmedTransactionInfo(hash)
    return this.formatReceipt(receipt)
  }
}
