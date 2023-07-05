import { http } from "./http"

export function getCoinTicker (coin) {
  return http.get(`/${coin}/ticker/`)
    .then(({ data }) => {
      return {
        buy: data.ticker.buy,
        sell: data.ticker.sell
      }
    })
}