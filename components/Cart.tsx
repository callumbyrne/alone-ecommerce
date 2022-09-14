import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import toast from 'react-hot-toast'
import {
  ChevronLeftIcon,
  PlusIcon,
  MinusIcon,
  ShoppingBagIcon,
  XCircleIcon,
} from '@heroicons/react/outline'

import { useStateContext } from '../context/StateContext'
import { urlFor } from '../lib/client'
import getStripe from '../lib/getStripe'

const Cart = () => {
  const cartRef = useRef(null)
  const {
    setShowCart,
    totalQuantities,
    cartItems,
    totalPrice,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext()

  const handleCheckout = async () => {
    const stripe = await getStripe()

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    })

    if (response.status === 500) return

    const data = await response.json()
    console.log(data)

    toast.loading('Redirecting...')

    stripe.redirectToCheckout({ sessionId: data.id })
  }

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
          <div className="empty-cart m-8 flex flex-col items-center">
            <ShoppingBagIcon className="h-36 w-36" />
            <h3 className="mb-3 text-sm font-semibold">
              Your shopping bag is empty
            </h3>
            <button
              type="button"
              onClick={() => setShowCart(false)}
              className="w-full rounded-lg bg-red-500 py-2 text-sm font-semibold text-white"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        )}
        <div className="flex h-full flex-col justify-between">
          <div className="product-container flex h-full flex-col">
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
                      <div className="inline-flex items-center">
                        <h3>{product.name}</h3>
                        <h4 className="pl-2 text-xs font-normal italic">
                          ({product.variant})
                        </h4>
                      </div>
                      <h3>${product.price * product.quantity}</h3>
                    </div>
                    <div className="bottom inline-flex w-full items-center justify-between">
                      <div className="inline-flex border border-gray-400">
                        <span
                          className="border-r border-gray-400 p-1"
                          onClick={() =>
                            toggleCartItemQuantity(product._id, 'dec')
                          }
                        >
                          <MinusIcon className="h-4 w-4" />
                        </span>
                        <span className="border-r border-gray-400 px-3">
                          {product.quantity}
                        </span>
                        <span
                          className="p-1"
                          onClick={() =>
                            toggleCartItemQuantity(product._id, 'inc')
                          }
                        >
                          <PlusIcon className="h-4 w-4" />
                        </span>
                      </div>
                      <button type="button" onClick={() => onRemove(product)}>
                        <XCircleIcon className="h-5 w-5 text-red-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {cartItems.length >= 1 && (
            <div className="cart-bottom mt-10">
              <div className="mb-3 flex justify-between px-5 font-semibold tracking-wider">
                <h3>Subtotal:</h3>
                <h3>${totalPrice}</h3>
              </div>
              <div className="flex w-full justify-center">
                <button
                  type="button"
                  className="mx-5 w-full rounded-lg bg-[#635bff] py-3 font-semibold tracking-wider text-white"
                  onClick={handleCheckout}
                >
                  PAY WITH STRIPE
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart
