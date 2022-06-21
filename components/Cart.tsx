import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
  const {
    setShowCart,
    totalQuantities,
    cartItems,
    totalPrice,
    toggleCartItemQuantity,
  } = useStateContext()
  console.log(cartItems)

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-side" onClick={() => setShowCart(false)}></div>
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

        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((product) => (
              <div
                className="product mt-5 flex flex-row items-center"
                key={product._id}
              >
                <div className="relative h-[60px] w-[90px]">
                  <Image
                    src={urlFor(product.image[0]).url()}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    quality={100}
                  />
                </div>
                <div className="details flex w-full flex-col justify-between pl-2">
                  <div className="top flex flex-row justify-between pb-4 font-semibold tracking-wider">
                    <h3>{product.name}</h3>
                    <h3>${product.price * product.quantity}</h3>
                  </div>
                  <div className="bottom inline-flex w-max items-center border border-gray-400">
                    <span
                      className="border-r border-gray-400 p-1"
                      onClick={() => toggleCartItemQuantity(product._id, 'dec')}
                    >
                      <MinusIcon className="h-4 w-4" />
                    </span>
                    <span className="border-r border-gray-400 px-3">
                      {product.quantity}
                    </span>
                    <span
                      className="p-1"
                      onClick={() => toggleCartItemQuantity(product._id, 'inc')}
                    >
                      <PlusIcon className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Cart
