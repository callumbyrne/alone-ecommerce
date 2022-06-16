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
  const { setShowCart, totalQuantities, cartItems, totalPrice } =
    useStateContext()

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading flex flex-row items-center"
          onClick={() => setShowCart(false)}
        >
          <ChevronLeftIcon className="h-5 w-5" />
          <span className="pr-1 font-semibold">Your Cart</span>
          <span className="font-semibold text-red-600">
            ({totalQuantities} items)
          </span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart m-10 flex flex-col items-center">
            <ShoppingBagIcon className="h-36 w-36" />
            <h3 className="mb-3 font-semibold">Your shopping bag is empty</h3>
            <button
              type="button"
              onClick={() => setShowCart(false)}
              className="rounded-lg bg-red-500 px-10 py-2 font-semibold text-white"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
