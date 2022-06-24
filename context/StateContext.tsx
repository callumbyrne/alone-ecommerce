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
  showMenu: boolean
  showCart: boolean
  totalQuantities: number
  cartItems: ICartItems[]
  totalPrice: number
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>
  setCartItems: React.Dispatch<React.SetStateAction<Array<ICartItems>>>
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>
  setTotalQuantities: React.Dispatch<React.SetStateAction<number>>
  onAdd: (product: IProduct, qty: number) => void
  onRemove: (product: IProduct) => void
  toggleCartItemQuantity: (id: string, value: 'inc' | 'dec') => void
}

const Context = createContext({} as IContext)

export const StateContext = ({ children }: Props) => {
  const [showMenu, setShowMenu] = useState(false)
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
        setTotalPrice(totalPrice + foundProduct.price)
        setTotalQuantities(totalQuantities + 1)
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
          setTotalPrice(totalPrice - foundProduct.price)
          setTotalQuantities(totalQuantities - 1)
        }
      }
    }
  }

  return (
    <Context.Provider
      value={{
        showMenu,
        showCart,
        totalQuantities,
        cartItems,
        totalPrice,
        setShowMenu,
        setShowCart,
        onAdd,
        onRemove,
        toggleCartItemQuantity,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
