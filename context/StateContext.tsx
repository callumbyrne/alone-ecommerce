import React, { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { IProduct } from '../typeings'

interface Props {
  children: React.ReactNode
}

interface ICartItems extends IProduct {
  quanity: number
}

interface IContext {
  showCart: boolean
  totalQuantities: number
  cartItems: ICartItems[]
  totalPrice: number
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Context = createContext({} as IContext)

export const StateContext = ({ children }: Props) => {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState<ICartItems[]>([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantities, setTotalQuantities] = useState(0)

  return (
    <Context.Provider
      value={{
        showCart,
        totalQuantities,
        cartItems,
        totalPrice,
        setShowCart,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
