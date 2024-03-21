import { combineReducers } from 'redux'
import { logActionMiddleware } from './logActionMiddleware'
import { orderSlice } from './orderReducer'
import { productsApiSlice, productsSlice } from './productsReducer'
import thunkMiddleware from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = persistReducer(
  { key: 'redux-toolkit', storage: storage },
  // { key: 'redux-toolkit', storage: storage, throttle: 100000 },
  combineReducers({
    products: productsSlice.reducer,
    order: orderSlice.reducer,
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
  })
)

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [
    productsApiSlice.middleware,
    thunkMiddleware,
    logActionMiddleware,
  ],
})

export const persistor = persistStore(store)

// @ts-ignore
window.persistor = persistor

export type RootState = ReturnType<typeof rootReducer>
