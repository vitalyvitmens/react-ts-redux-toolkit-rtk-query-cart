import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../types/IProduct'
import { orderApiSlice } from './orderReducer'

const initialState: Record<IProduct['id'], number> = {}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increaseQuantity(state, action: PayloadAction<IProduct['id']>) {
      if (state[action.payload]) {
        state[action.payload]++
      } else {
        state[action.payload] = 1
      }
    },

    decreaseQuantity(state, action: PayloadAction<IProduct['id']>) {
      if (state[action.payload] > 0) {
        state[action.payload]--
      } else {
        state[action.payload] = 0
      }
    },
  },

  extraReducers(builder) {
    builder.addMatcher(
      orderApiSlice.endpoints.createOrder.matchFulfilled,
      () => initialState
    )
  },
})

export const productsApiSlice = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mocki.io/v1' }),
  endpoints(builder) {
    return {
      getProducts: builder.query<IProduct[], void>({
        query: () => '/65266b8c-9c4c-4470-bcbb-a3d6f340f30b',
      }),
    }
  },
})

export const { increaseQuantity, decreaseQuantity } = productsSlice.actions

export const { useGetProductsQuery } = productsApiSlice
