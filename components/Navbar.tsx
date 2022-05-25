import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'
import { MenuIcon, ShoppingBagIcon } from '@heroicons/react/outline'

const Navbar = () => {
  return (
    <>
      <div className="flex h-7 items-center justify-center bg-[#f6cbff] text-xs font-medium tracking-wider">
        Wear Alone, alone or with friends!
      </div>
      <div className="flex flex-row justify-between py-4 px-4">
        <button className="flex items-center justify-center">
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
        <button className="relative flex items-center justify-center">
          <ShoppingBagIcon className="h-7 w-7 hover:scale-110" />
          <span className="absolute -right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#f02d34] text-xs font-semibold text-[#eee]">
            0
          </span>
        </button>
      </div>
    </>
  )
}

export default Navbar
