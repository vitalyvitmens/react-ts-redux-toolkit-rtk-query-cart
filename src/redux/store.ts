import { combineReducers } from 'redux'
import { logActionMiddleware } from './logActionMiddleware'
import { orderApiSlice } from './orderReducer'
import { productsApiSlice, productsSlice } from './productsReducer'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REGISTER,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = persistReducer(
  { key: 'redux-toolkit', storage: storage },
  // { key: 'redux-toolkit', storage: storage, throttle: 100000 },
  combineReducers({
    products: productsSlice.reducer,
    [orderApiSlice.reducerPath]: orderApiSlice.reducer,
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
  })
)

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([
      orderApiSlice.middleware,
      productsApiSlice.middleware,
      logActionMiddleware,
    ])
  },
})

export const persistor = persistStore(store)

// @ts-ignore
window.persistor = persistor

export type RootState = ReturnType<typeof rootReducer>
