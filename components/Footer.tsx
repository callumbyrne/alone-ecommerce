import Image from 'next/image'
import logo from '../public/logo.png'

const Footer = () => {
  return (
    <div className="bg-[#f0f1f2] pt-20 text-center text-lg tracking-widest xl:text-xl">
      <section className="md:ml-16 md:flex md:text-left">
        <div className="pb-20 md:mr-20">
          <h2 className="pb-2 font-bold text-gray-800">Shop</h2>
          <ul className="font-normal leading-relaxed text-gray-600">
            <li>Best Sellers</li>
            <li>Featured</li>
            <li>All</li>
          </ul>
        </div>

        <div className="pb-20">
          <h2 className="pb-2 font-bold text-gray-800">About</h2>
          <ul className="font-normal leading-relaxed text-gray-600">
            <li>About Us</li>
            <li>Contact</li>
            <li>Shipping and Returns</li>
          </ul>
        </div>
      </section>

      <div className="flex flex-col items-center bg-[#545454] py-20 text-white">
        <div className="block w-32 cursor-pointer pb-5">
          <Image src={logo} alt="logo" layout="responsive" objectFit="cover" />
        </div>
        <h2 className="pb-2 font-bold">Support</h2>
        <ul className="font-normal leading-relaxed">
          <li>fake@aloneeyewear.com</li>
          <li>123 456 789</li>
          <li className="text-xs text-gray-400">
            Business hours, 9am - 5pm AEST daily
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
