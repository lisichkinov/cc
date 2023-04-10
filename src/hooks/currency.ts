import currencies from '../data/currencies.json'
import { useGetCoinbaseRatesQuery } from '../store/coinbase/api'
import { CurrencyType } from '../types/currency'
import { useAppSelector } from './redux'

export const useCurrency = () => {
    const { baseCurrency, targetCurrencies } = useAppSelector(state => state.settings)
    const { data, error, isLoading } = useGetCoinbaseRatesQuery(baseCurrency)

    const base = currencies.find(c => c.code === baseCurrency)

    const all: CurrencyType[] = currencies
    const selected: CurrencyType[] = all.filter(c => targetCurrencies.includes(c.code ?? ''))
    const available: CurrencyType[] = all.filter(c => !selected.includes(c) && c.code !== baseCurrency)

    return {
        all,
        base,
        selected,
        available,
        error,
        isLoading,
        rates: data
    }
}