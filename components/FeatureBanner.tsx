import Image from 'next/image'
import image1 from '../public/twoglassesblue.png'
import image2 from '../public/smoking.png'

const FeatureBanner = () => {
  return (
    <div className="bg-[#d3d327]">
      <div className="relative mx-7 h-[450px] -translate-y-3">
        <Image
          src={image1}
          alt="feature image 1"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
        />
      </div>
      <div className="flex items-center justify-center">
        <button className="-translate-y-11 rounded-lg bg-[#ca9cff] py-5 px-4 text-lg font-bold tracking-wider text-gray-800">
          Explore Collection
        </button>
      </div>
      <div className="relative mx-7 h-[450px] translate-y-3">
        <Image
          src={image2}
          alt="feature image 2"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
        />

        <div className="flex h-full items-end justify-center">
          <button className="translate-y-8 rounded-lg bg-[#e6ff7b] py-5 px-4 text-lg font-bold tracking-wider text-gray-800">
            Explore Collection
          </button>
        </div>
      </div>
    </div>
  )
}

export default FeatureBanner