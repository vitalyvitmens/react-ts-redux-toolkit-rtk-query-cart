import { useCreateOrderMutation } from '../redux/orderReducer'

export const OrderModal = () => {
  const [, { data, reset }] = useCreateOrderMutation({
    fixedCacheKey: 'order',
  })

  if (!data?.success) {
    return null
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Order confirmed</h2>
        <div className="main-button" onClick={() => reset()}>
          Perfect!
        </div>
      </div>
    </div>
  )
}
