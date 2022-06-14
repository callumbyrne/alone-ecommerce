import { useRef } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import {
  ChevronLeftIcon,
  PlusIcon,
  MinusIcon,
  ShoppingBagIcon,
} from '@heroicons/react/outline'

import { useStateContext } from '../context/StateContext'
import { urlFor } from '../lib/client'

const Cart = () => {
  const cartRef = useRef(null)
  const { setShowCart } = useStateContext()

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button type="button" className="cart-heading"></button>
      </div>
    </div>
  )
}

export default Cart
