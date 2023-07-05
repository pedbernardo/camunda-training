import { getCoinTicker } from '../../js/services/mercado-bitcoin'

export default function ({ camForm, $scope }) {
  camForm.on('variables-fetched', async () => {
    const { createApp } = await loadPetiteVue()

    createApp(
      bitCoinTicker(camForm)
    ).mount()
  })
}

function bitCoinTicker (camForm) {
  return {
    buyQuote: '',
    sellQuote: '',

    start () {
      const coin = camForm.variableManager.variableValue('coin')
      this.update(coin)
    },

    update (coin) {
      return getCoinTicker(coin)
        .then(this.applyTicker)
        .catch(console.error)
    },

    applyTicker ({ buy, sell }) {
      this.buyQuote = buy
      this.sellQuote = sell

      console.log(`ticker applied: buy - $${Number(buy).toFixed(2)} | sell - $${Number(sell).toFixed(2)}`)
    }
  }
}

function loadPetiteVue () {
  return import('https://unpkg.com/petite-vue?module')
}