export interface CoinbaseResponse {
    data: CoinbaseRatesData
}

export interface CoinbaseRatesData {
    currency: string
    rates: CoinbaseRates
}

export interface CoinbaseRates {
    [currency: string]: number
}