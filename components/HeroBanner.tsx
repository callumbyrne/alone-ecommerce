import Image from 'next/image'
import swing from '../public/swing.png'
import heroImage from '../public/glasses_pool.png'
import star from '../public/star.gif'

const HeroBanner = () => {
  return (
    <div className="">
      <div className="relative h-[400px]">
        <Image
          src={heroImage}
          alt="hero image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="absolute -translate-y-[100px]">
          <Image src={star} alt="spinning star" height={80} width={80} />
        </div>
        <button className="w-56 -translate-y-9 rounded-lg bg-[#ffe783] py-5 px-4 text-lg font-bold tracking-wider text-gray-800">
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
