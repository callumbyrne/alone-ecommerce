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

  return (
    <Context.Provider
      value={{
        showCart,
        totalQuantities,
        cartItems,
        totalPrice,
        setShowCart,
        onAdd,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
