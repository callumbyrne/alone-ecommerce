import Image from 'next/image'
import heroImage from '../public/glasses_pool.png'
import star from '../public/star.gif'
import Link from 'next/link'
import skyBg from '../public/skybackground.webp'

const HeroBanner = () => {
  return (
    <div className="md:mb-40 md:flex md:bg-[url('../public/skybackground.webp')] lg:px-5 xl:items-center">
      <div className="relative h-[400px] md:ml-20 md:w-full md:translate-y-5 xl:ml-32 xl:h-[650px]">
        <Image
          src={heroImage}
          alt="hero image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>

      <div className="right-side md:flex md:flex-col-reverse md:text-white lg:ml-3">
        <div className="flex flex-col items-center justify-center">
          <div className="absolute h-20 w-20 -translate-y-[100px] md:-translate-y-20 xl:h-28 xl:w-28">
            <Image src={star} alt="spinning star" layout="fill" />
          </div>
          <Link href={'/collections/all'}>
            <button className="w-56 -translate-y-9 rounded-lg bg-[#ffe783] py-5 px-4 text-lg font-bold tracking-wider text-gray-800 md:-translate-y-4 xl:w-fit xl:translate-y-0 xl:px-6 xl:text-2xl">
              Explore Collection
            </button>
          </Link>
        </div>

        <div className="px-7 pb-20 xl:pb-32">
          <h2 className="mb-1 text-4xl font-bold tracking-wider xl:text-6xl">
            Wear Alone,
          </h2>
          <h2 className="mb-5 text-4xl font-bold tracking-wider xl:text-6xl">
            or with others!
          </h2>
          <p className="font-medium leading-loose tracking-widest xl:text-2xl">
            On trend designer sunglasses you can actually afford. Designed and
            tested in Melbourne, Australia by people who care.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
