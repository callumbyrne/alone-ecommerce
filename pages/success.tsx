import { useEffect } from 'react'
import Link from 'next/link'
import { useStateContext } from '../context/StateContext'
import { CheckCircleIcon } from '@heroicons/react/solid'

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()

  useEffect(() => {
    localStorage.clear()
    setCartItems([])
    setTotalPrice(0)
    setTotalQuantities(0)
  }, [])

  return (
    <div className="wrapper my-20 flex w-screen justify-center text-gray-700">
      <div className="container flex w-3/4 flex-col items-center justify-center border p-5 shadow-lg">
        <CheckCircleIcon className="mb-1 h-20 w-20 text-green-500" />
        <h2 className="mb-3 text-xl font-bold tracking-wider">Success</h2>
        <h2 className="mb-8 text-sm leading-relaxed">
          Thank you for your order. You will receive an order confirmation email
          with details of your order.
        </h2>
        <Link href={'/'}>
          <button
            type="button"
            className="mx-5 mb-5 w-full rounded-lg bg-[#635bff] py-3 text-sm font-normal tracking-wider text-white"
          >
            CONTINUE SHOPPING
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success
