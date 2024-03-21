import { memo } from 'react'
import { useAppDispatch } from '../redux/hooks'
import { IProduct } from '../types/IProduct'
import { decreaseQuantity, increaseQuantity } from '../redux/productsReducer'

interface IProductProps {
  product: IProduct
  quantity: number
}

export const Product = memo(({ product, quantity }: IProductProps) => {
  const dispatch = useAppDispatch()

  return (
    <li className="product">
      <div className="product-preview">
        <div className="thumbnail">
          <img className="image" src={product.image} alt={product.name} />
        </div>
        <div className="product-paper">
          <div className="product-name">{product.name}</div>
          <div className="product-price">$ {product.price}</div>
        </div>
      </div>
      <div className="product-quantity">x{quantity}</div>
      <div className="product-interactions">
        <div
          className="button plus"
          onClick={() => dispatch(increaseQuantity(product.id))}
        >
          +
        </div>
        <div
          className="button minus"
          onClick={() => dispatch(decreaseQuantity(product.id))}
        >
          -
        </div>
      </div>
    </li>
  )
})
