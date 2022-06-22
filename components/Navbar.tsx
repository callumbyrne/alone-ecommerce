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
      <div className="relative flex flex-row justify-between py-4 px-4">
        <button type="button" onClick={() => setShowMenu(true)}>
          <MenuIcon className="h-7 w-7" />
        </button>

        <Link href="/" passHref>
          <div className="block w-24 cursor-pointer">
            <Image
              src={logo}
              alt="logo"
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </Link>

        <button
          className="relative flex items-center justify-center"
          onClick={() => setShowCart(true)}
        >
          <ShoppingBagIcon className="h-7 w-7 hover:scale-110" />
          <span className="absolute -right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#f02d34] text-xs font-semibold text-[#eee]">
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
