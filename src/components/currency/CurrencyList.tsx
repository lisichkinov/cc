import { CurrencyType } from '../../types/currency'
import { CurrencyPair } from './CurrencyPair'

type Props = {
    baseCurrency: CurrencyType | any,
    targetCurrencies: CurrencyType[],
    rates: any
}

export function CurrencyList({baseCurrency, targetCurrencies, rates}: Props) {
    return (
        <>
            {targetCurrencies.map((currency: CurrencyType) => (
                <CurrencyPair
                    key={currency.code}
                    base={baseCurrency}
                    target={{...currency, rate: rates[currency.code]}}
                />
            ))}
        </>
    )
}