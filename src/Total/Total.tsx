import { useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { round } from '../utils'
import { createOrder } from '../redux/orderReducer'

export function Total() {
  const products = useAppSelector((state) => state.products)
  const orderLoading = useAppSelector((state) => state.order.loading)

  const total = useMemo(() => {
    const subtotal = products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    )
    const tax = subtotal * 0.13
    return {
      subtotal: round(subtotal),
      tax: round(tax),
      total: round(subtotal + tax),
    }
  }, [products])

  const dispatch = useAppDispatch()

  return (
    <table className="bill">
      <tbody>
        <tr className="subtotal">
          <td className="label">Subtotal :</td>
          <td className="value">$ {total.subtotal}</td>
        </tr>
        <tr className="salestax">
          <td className="label">Sales tax :</td>
          <td className="value">$ {total.tax}</td>
        </tr>
        <tr className="total">
          <td className="label">Total :</td>
          <td className="value">$ {total.total}</td>
        </tr>
        <tr>
          <td colSpan={2} className="button-cell">
            <button
              className="main-button"
              disabled={orderLoading}
              onClick={() => dispatch(createOrder())}
            >
              Buy
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
