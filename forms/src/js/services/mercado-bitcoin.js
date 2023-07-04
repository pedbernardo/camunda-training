export function getCoinTicker (coin) {
  return fetch(`https://www.mercadobitcoin.net/api/${coin}/ticker/`)
    .then(res => res.json())
    .then(({ ticker }) => {
      return {
        buy: ticker.buy,
        sell: ticker.sell
      }
    })
}