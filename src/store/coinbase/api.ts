import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CoinbaseRates, CoinbaseResponse } from './types'

export const coinbaseApi = createApi({
    reducerPath: 'coinbase/rates',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.coinbase.com/v2/'
    }),
    endpoints: build => ({
        getCoinbaseRates: build.query<CoinbaseRates, string>({
            query: (currency?: string) => ({
                url: 'exchange-rates',
                params: {
                    currency: currency
                }
            }),
            transformResponse: (response: CoinbaseResponse) => response.data.rates
        }),
    }) 
})

export const { useGetCoinbaseRatesQuery } = coinbaseApi