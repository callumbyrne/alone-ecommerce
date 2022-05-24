import Image from 'next/image'
import swing from '../public/swing.png'

const HeroBanner = () => {
  return (
    <div className="">
      <div className="relative h-[400px]">
        <Image
          src={swing}
          alt="hero image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="flex items-center justify-center">
        <button className="-translate-y-9 rounded-lg bg-[#ffe783] py-5 px-4 text-lg font-bold tracking-wider text-gray-800">
          Explore Collection
        </button>
      </div>
      <div className="px-7 pb-20">
        <h2 className="mb-1 text-4xl font-bold tracking-wider">Wear Alone,</h2>
        <h2 className="mb-5 text-4xl font-bold tracking-wider">
          or with others!
        </h2>
        <p className="font-medium leading-loose tracking-widest">
          On trend designer sunglasses you can actually afford. Designed and
          tested in Melbourne, Australia by people who care.
        </p>
      </div>
    </div>
  )
}

export default HeroBanner
