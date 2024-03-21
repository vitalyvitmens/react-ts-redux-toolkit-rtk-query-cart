import { Product } from '../Product/Product'
import { useAppSelector } from '../redux/hooks'
import { useGetProductsQuery } from '../redux/productsReducer'

export function Cart() {
  const { data: products } = useGetProductsQuery()
  const quantities = useAppSelector((state) => state.products)

  if (!products) {
    return null
  }

  return (
    <ul className="cart">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          quantity={quantities[product.id] || 0}
        />
      ))}
    </ul>
  )
}
