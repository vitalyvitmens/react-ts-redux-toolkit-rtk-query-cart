import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const orderApiSlice = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mocki.io/v1' }),
  endpoints(builder) {
    return {
      createOrder: builder.mutation<{ success: boolean }, void>({
        query: () => ({ url: '/909c7add-6fdf-4ee0-ac14-16147d1f3a0f' }),
      }),
    }
  },
})

export const { useCreateOrderMutation } = orderApiSlice
