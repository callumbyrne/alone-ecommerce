const Footer = () => {
  return (
    <div className="bg-[#f0f1f2] pt-20 text-center text-lg tracking-widest">
      <div className="pb-20">
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

      <div className="bg-[#545454] py-20 text-white">
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
