import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// import { AnyAction } from 'redux'
// import {
//   CREATE_ORDER_ACTION,
//   CREATE_ORDER_SUCCESS_ACTION,
//   RESET_ORDER_ACTION,
// } from './actions'

const initialState = {
  loading: false,
  confirmed: false,
}

// export function orderReducer(state = initialState, action: AnyAction) {
//   switch (action.type) {
//     case CREATE_ORDER_ACTION:
//       return {
//         loading: true,
//         confirmed: false,
//       }

//     case CREATE_ORDER_SUCCESS_ACTION:
//       return {
//         loading: false,
//         confirmed: true,
//       }

//     case RESET_ORDER_ACTION:
//       return {
//         loading: false,
//         confirmed: false,
//       }

//     default:
//       break
//   }

//   return state
// }

export const createOrder = createAsyncThunk('createOrder', async () => {
  const res = await fetch(
    'https://mocki.io/v1/909c7add-6fdf-4ee0-ac14-16147d1f3a0f'
  )
  const data: { success: boolean } = await res.json()

  if (!data.success) {
    throw new Error('Something goes wrong')
  }
})

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    resetOrder() {
      return initialState
    },
  },
  extraReducers(builder) {
    builder.addMatcher(createOrder.pending.match, () => {
      return {
        loading: true,
        confirmed: false,
      }
    })

    builder.addMatcher(createOrder.fulfilled.match, () => {
      return {
        loading: false,
        confirmed: true,
      }
    })

    builder.addMatcher(createOrder.rejected.match, () => {
      return {
        loading: false,
        confirmed: false,
      }
    })
  },
})

export const { resetOrder } = orderSlice.actions
