export type CurrencyType = {
    code: string,
    name: string,
    symbol: string,
    country: string,
    rate?: number
}

export type CurrencyPairType = {
    base: CurrencyType,
    target: CurrencyType,
}