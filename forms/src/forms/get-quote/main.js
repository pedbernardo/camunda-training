import { getCoinTicker } from '../../js/services/mercado-bitcoin'

export default function ({ camForm, $scope }) {
  const formBitCoinTicker = bitCoinTicker($scope, camForm)

  camForm.on('variables-fetched', () => {
    formBitCoinTicker.start()

    setTimeout(() => {
      formBitCoinTicker.update('ETH')
    }, 1000)
  })
}

function bitCoinTicker ($scope, camForm) {
  return {
    start,
    update
  }

  async function start () {
    const coin = camForm.variableManager.variableValue('coin')
    update(coin)
  }

  async function update (coin) {
    $scope.coin = coin

    return getCoinTicker(coin)
      .then(applyTicker)
      .catch(console.error)
  }

  function applyTicker ({ buy, sell }) {
    $scope.buyQuote = buy
    $scope.sellQuote = sell
    /** @info forces AngularJS re-run digest cycle due usage of async call */
    $scope.$apply()

    console.log(`ticker applied: buy - $${Number(buy).toFixed(2)} | sell - $${Number(sell).toFixed(2)}`)
  }
}