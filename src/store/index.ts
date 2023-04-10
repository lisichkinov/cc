import { configureStore } from "@reduxjs/toolkit"
import { coinbaseApi } from "./coinbase/api"
import { settingsReducer } from "./storage/slice"
import { setupListeners } from "@reduxjs/toolkit/dist/query"

export const store = configureStore({
    reducer: {
        [coinbaseApi.reducerPath]: coinbaseApi.reducer,
        settings: settingsReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(coinbaseApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>