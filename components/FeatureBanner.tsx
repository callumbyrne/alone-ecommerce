import Image from 'next/image'
import image1 from '../public/twoglassesblue.png'
import image2 from '../public/smoking.png'
import Link from 'next/link'

const FeatureBanner = () => {
  return (
    <div className="mb-12 bg-[#d3d327] lg:flex lg:justify-center lg:pb-5">
      <div>
        <div className="relative mx-7 h-[450px] -translate-y-3 md:mx-28 md:h-[600px] lg:mx-0 lg:h-[490px] lg:w-[390px] lg:-translate-y-8">
          <Image
            src={image1}
            alt="feature image 1"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
          />
          <div className="flex h-full items-end justify-center">
            <Link href={'/collections/all'}>
              <button className="w-56 translate-y-8 rounded-lg bg-[#ca9cff] py-5 px-4 text-lg font-bold tracking-wider text-gray-800">
                Featured
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative mx-7 h-[450px] translate-y-3 md:mx-28 md:h-[600px] lg:mx-0 lg:ml-10 lg:h-[490px] lg:w-[390px] lg:-translate-y-8">
        <Image
          src={image2}
          alt="feature image 2"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
        />

        <div className="flex h-full items-end justify-center">
          <Link href={'/collections/all'}>
            <button className="w-56 translate-y-8 rounded-lg bg-[#e6ff7b] py-5 px-4 text-lg font-bold tracking-wider text-gray-800">
              Best Sellers
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeatureBanner
