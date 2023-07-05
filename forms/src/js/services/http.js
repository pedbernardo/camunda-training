import axios from 'axios'

export const http = axios.create({
  baseURL: process.env.PUBLIC_MERCADO_BITCOIN_URL
})