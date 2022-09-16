import { useStateContext } from '../context/StateContext'
import Link from 'next/link'
import { XIcon } from '@heroicons/react/outline'

const Menu = () => {
  const { setShowMenu } = useStateContext()

  const clickHandler = () => setShowMenu(false)

  return (
    <div className="menu-wrapper">
      <div className="menu-side" onClick={clickHandler}></div>
      <div className="menu-container">
        <button type="button" className="w-max">
          <XIcon className="h-7 w-7" onClick={clickHandler} />
        </button>

        <div>
          <Link href={'/'}>
            <h2
              className="my-5 w-max text-xl font-bold text-gray-800"
              onClick={clickHandler}
            >
              Home
            </h2>
          </Link>
        </div>

        <div className="w-max pb-10">
          <h2 className="mb-2 text-xl font-bold text-gray-800">Shop</h2>
          <ul className="text-lg font-normal leading-relaxed text-gray-600">
            <Link href={'/collections/all'}>
              <li onClick={clickHandler}>Best Sellers</li>
            </Link>
            <Link href={'/collections/all'}>
              <li onClick={clickHandler}>Featured</li>
            </Link>
            <Link href={'/collections/all'}>
              <li onClick={clickHandler}>Shop All</li>
            </Link>
          </ul>
        </div>

        <div className="w-max pb-20">
          <h2 className="pb-2 text-xl font-bold text-gray-800">About</h2>
          <ul className="text-lg font-normal leading-relaxed text-gray-600">
            <li>About Us</li>
            <li>Contact</li>
            <li>Shipping and Returns</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Menu
