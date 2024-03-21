import { createContext, useCallback, useMemo, useState } from 'react'
import { initialProducts } from './initialProducts'
import { round } from './utils'

export const ProductsContext = createContext({
  products: [],
  total: {
    subtotal: 0,
    tax: 0,
    total: 0,
  },
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
})

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts)

  const total = useMemo(() => {
    const subtotal = products.reduce((acc, product) => {
      return acc + product.price * product.quantity
    }, 0)
    const tax = subtotal * 0.13
    const total = subtotal + tax

    return {
      subtotal: round(subtotal),
      tax: round(tax),
      total: round(total),
    }
  }, [products])

  const increaseQuantity = useCallback((id) => {
    setProducts((products) =>
      products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          }
        }

        return product
      })
    )
  }, [])

  const decreaseQuantity = useCallback((id) => {
    setProducts((products) =>
      products.map((product) => {
        if (product.id === id && product.quantity > 0) {
          return {
            ...product,
            quantity: product.quantity - 1,
          }
        }

        return product
      })
    )
  }, [])

  return (
    <ProductsContext.Provider
      value={{
        products,
        total,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
