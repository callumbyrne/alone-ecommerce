import React, { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { IProduct } from '../typeings'

interface Props {
  children: React.ReactNode
}

interface ICartItems extends IProduct {
  quantity: number
}

interface IContext {
  showCart: boolean
  totalQuantities: number
  cartItems: ICartItems[]
  totalPrice: number
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>
  onAdd: (product: IProduct, qty: number) => void
  onRemove: (product: IProduct) => void
  toggleCartItemQuantity: (id: string, value: 'inc' | 'dec') => void
}

const Context = createContext({} as IContext)

export const StateContext = ({ children }: Props) => {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState<ICartItems[]>([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantities, setTotalQuantities] = useState(0)

  const onAdd = (product: IProduct, qty: number) => {
    const checkProductInCart = cartItems.find(
      (cartProduct) => cartProduct._id === product._id
    )

    if (checkProductInCart) {
      setTotalPrice(totalPrice + product.price * qty)
      setTotalQuantities(totalQuantities + qty)

      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          return { ...cartProduct, quanity: cartProduct.quantity + qty }
        }
        return cartProduct
      })

      setCartItems(updatedCartItems)
      toast.success(`${qty} ${product.name} added`)
    } else {
      setTotalPrice(totalPrice + product.price * qty)
      setTotalQuantities(totalQuantities + qty)

      product.quantity = qty
      setCartItems([...cartItems, { ...product }])

      toast.success(`${qty} ${product.name} added`)
    }
  }

  const onRemove = (product: IProduct) => {
    const foundProduct = cartItems.find((item) => item._id === product._id)
    const updatedCartItems = cartItems.filter(
      (item) => item._id !== product._id
    )

    if (foundProduct) {
      setTotalPrice(totalPrice - foundProduct.price * foundProduct.quantity)
      setTotalQuantities(totalQuantities - foundProduct.quantity)
      setCartItems(updatedCartItems)
      toast.success(`${foundProduct.name} was removed`)
    }
  }

  const toggleCartItemQuantity = (id: string, value: 'inc' | 'dec') => {
    const foundProduct = cartItems.find((item) => item._id === id)

    if (foundProduct) {
      if (value === 'inc') {
        const updatedCartItems = cartItems.map((item) => {
          if (item._id === id) {
            return { ...item, quantity: item.quantity + 1 }
          }
          return item
        })
        setCartItems(updatedCartItems)
      }

      if (value === 'dec') {
        if (foundProduct.quantity === 1) {
          onRemove(foundProduct)
        }
        if (foundProduct.quantity > 1) {
          const updatedCartItems = cartItems.map((item) => {
            if (item._id === id) {
              return { ...item, quantity: item.quantity - 1 }
            }
            return item
          })
          setCartItems(updatedCartItems)
        }
      }
    }
  }

  return (
    <Context.Provider
      value={{
        showCart,
        totalQuantities,
        cartItems,
        totalPrice,
        setShowCart,
        onAdd,
        onRemove,
        toggleCartItemQuantity,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
