import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import defaults from '../../data/defaults.json'

const BASE_CURRENCY_KEY = 'ls_bc'
const SELECTED_CURRENCIES_KEY = 'ls_sc'

interface SettingsState {
    baseCurrency: string,
    targetCurrencies: string[]
}

const initialState: SettingsState = {
    baseCurrency: localStorage.getItem(BASE_CURRENCY_KEY) ?? defaults.baseCurrency,
    targetCurrencies: JSON.parse(localStorage.getItem(SELECTED_CURRENCIES_KEY) ?? JSON.stringify(defaults.targetCurrencies)) 
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setBaseCurrency(state, action: PayloadAction<string>) {
            state.baseCurrency = action.payload
            localStorage.setItem(BASE_CURRENCY_KEY, state.baseCurrency ?? 'RUB')
        },
        addCurrency(state, action: PayloadAction<string>) {
            if(!state.targetCurrencies.includes(action.payload)){
                state.targetCurrencies.push(action.payload)
                localStorage.setItem(SELECTED_CURRENCIES_KEY, JSON.stringify(state.targetCurrencies))
            }
        },
        removeCurrency(state, action: PayloadAction<string>) {
            state.targetCurrencies = state.targetCurrencies.filter(c => c !== action.payload)
            localStorage.setItem(SELECTED_CURRENCIES_KEY, JSON.stringify(state.targetCurrencies))
        }
    }
})

export const settingsActions = settingsSlice.actions
export const settingsReducer = settingsSlice.reducer