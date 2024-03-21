import { Product } from '../Product/Product'
import { useAppSelector } from '../redux/hooks'

export function Cart() {
  const products = useAppSelector((state) => state.products)

  return (
    <ul className="cart">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  )
}
