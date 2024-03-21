import { ThunkAction } from 'redux-thunk'
import { RootState } from './store'
import { AnyAction } from 'redux'

// export const INCREASE_QUANTITY_ACTION = 'INCREASE_QUANTITY_ACTION'
// export const DECREASE_QUANTITY_ACTION = 'DECREASE_QUANTITY_ACTION'

export const CREATE_ORDER_ACTION = 'CREATE_ORDER_ACTION'
export const CREATE_ORDER_SUCCESS_ACTION = 'CREATE_ORDER_SUCCESS_ACTION'
export const RESET_ORDER_ACTION = 'RESET_ORDER_ACTION'

// interface CreateOrderAction {
//   type: typeof CREATE_ORDER_ACTION
// }

// interface CreateOrderSuccessAction {
//   type: typeof CREATE_ORDER_SUCCESS_ACTION
// }

// interface ResetOrderAction {
//   type: typeof RESET_ORDER_ACTION
// }

// interface IncreaseQuantityAction {
//   type: typeof INCREASE_QUANTITY_ACTION
//   payload: {
//     id: IProduct['id']
//   }
// }

// interface DecreaseQuantityAction {
//   type: typeof DECREASE_QUANTITY_ACTION
//   payload: {
//     id: IProduct['id']
//   }
// }

// export function increaseQuantityActionCreator(
//   id: IProduct['id']
// ): IncreaseQuantityAction {
//   return { type: INCREASE_QUANTITY_ACTION, payload: { id } }
// }

// export function decreaseQuantityActionCreator(
//   id: IProduct['id']
// ): DecreaseQuantityAction {
//   return { type: DECREASE_QUANTITY_ACTION, payload: { id } }
// }

export function createOrderAction(): ThunkAction<
  void,
  RootState,
  void,
  AnyAction
> {
  return async (dispatch) => {
    dispatch({ type: CREATE_ORDER_ACTION })

    //! создай фейковый api по адресу https://mocki.io/
    //! в textarea вставь {"success": true} и нажми Create API
    //! скопируй сгенерированный адрес и вставь в функцию fetch
    const res = await fetch(
      'https://mocki.io/v1/909c7add-6fdf-4ee0-ac14-16147d1f3a0f'
    )
    const data = await res.json()

    if (data.success) {
      dispatch({ type: CREATE_ORDER_SUCCESS_ACTION })
    } else {
      dispatch({ type: RESET_ORDER_ACTION })
    }
  }
}
