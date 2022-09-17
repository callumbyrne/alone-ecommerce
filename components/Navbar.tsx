import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'
import { MenuIcon, ShoppingBagIcon } from '@heroicons/react/outline'
import Cart from './Cart'
import { useStateContext } from '../context/StateContext'
import Menu from './Menu'

const Navbar = () => {
  const { showMenu, setShowMenu, showCart, setShowCart, totalQuantities } =
    useStateContext()

  return (
    <>
      <div className="flex h-7 items-center justify-center bg-[#f6cbff] text-xs font-medium tracking-wider">
        Wear Alone, or with friends!
      </div>
      <div className="flex flex-row py-4 px-4 lg:px-6 xl:py-6 xl:px-10">
        <button
          className="w-1/3 lg:hidden"
          type="button"
          onClick={() => setShowMenu(true)}
        >
          <MenuIcon className="h-7 w-7" />
        </button>

        <ul className="hidden w-1/3 items-center text-lg font-semibold tracking-widest lg:flex">
          <li className="group relative mr-8">
            <Link href={'/collections/all'}>
              <a className="hover:text-gray-500">Shop</a>
            </Link>
            <div className="absolute z-10 hidden whitespace-nowrap bg-white py-3 pl-3 pr-16 group-hover:block">
              <Link href={'/collections/all'}>
                <a className="block py-1 hover:text-gray-500">Best Sellers</a>
              </Link>
              <Link href={'/collections/all'}>
                <a className="block py-1 hover:text-gray-500">Featured</a>
              </Link>
              <Link href={'/collections/all'}>
                <a className="block py-1 hover:text-gray-500">Shop All</a>
              </Link>
            </div>
          </li>
          <li className="group relative">
            <Link href={''}>
              <a>About</a>
            </Link>
            <div className="absolute z-10 hidden whitespace-nowrap bg-white py-3 pl-3 pr-16 group-hover:block">
              <Link href={''}>
                <a className="block py-1 hover:text-gray-500">About Us</a>
              </Link>
              <Link href={''}>
                <a className="block py-1 hover:text-gray-500">Contact</a>
              </Link>
              <Link href={''}>
                <a className="block py-1 hover:text-gray-500">
                  Shipping and Returns
                </a>
              </Link>
            </div>
          </li>{' '}
        </ul>

        <div className="flex w-1/3 justify-center">
          <Link href="/" passHref>
            <div className="block w-24 cursor-pointer object-center">
              <Image
                src={logo}
                alt="logo"
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </Link>
        </div>

        <button className="relative flex w-1/3 items-center justify-end">
          <ShoppingBagIcon
            onClick={() => setShowCart(true)}
            className="h-7 w-7 hover:scale-110"
          />
          <span
            onClick={() => setShowCart(true)}
            className="absolute -right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#f02d34] text-xs font-semibold text-[#eee]"
          >
            {totalQuantities}
          </span>
        </button>
      </div>

      {showMenu && <Menu />}
      {showCart && <Cart />}
    </>
  )
}

export default Navbar
