import { Contract as EthersContract } from '@ethersproject/contracts'
import { MesonClient } from '@meson/sdk'
import { Meson } from '@meson/contract-abis'

import mainnets from './mainnets.json'
import testnets from './testnets.json'

export default class MesonPresets {
  private _useTestnet: boolean
  private _cache: Map<string, MesonClient>

  constructor () {
    this._useTestnet = false
    this._cache = new Map()
  }

  useTestnet(v) {
    this._useTestnet = v
  }

  getAllNetworks () {
    return this._useTestnet ? testnets : mainnets
  }

  getNetwork (id) {
    const presets = this.getAllNetworks()
    return presets.find(item => item.id === id)
  }

  getTokensForNetwork (id) {
    const presets = this.getAllNetworks()
    const match = presets.find(item => item.id === id)
    return match?.tokens || []
  }

  getClient (id, Contract = EthersContract) {
    const network = this.getNetwork(id)
    if (!network) {
      console.warn(`Unsupported network: ${id}`)
      return
    }
    if (!this._cache.get(id)) {
      const instance = new Contract(network.mesonAddress, Meson.abi)
      const client = new MesonClient(instance, Number(network.chainId), network.slip44)
      this._cache.set(id, client)
    }
    return this._cache.get(id)
  }
}
