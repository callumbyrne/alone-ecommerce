import Image from 'next/image'
import { urlFor } from '../lib/client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import { Dispatch, SetStateAction } from 'react'

interface IImage {
  asset: {
    _ref: string
  }
  _key: string
}

interface IProps {
  images: IImage[]
  setMainImage: Dispatch<
    SetStateAction<{ asset: { _ref: string }; _key: string }>
  >
}

const PreviewCarousel = ({ images, setMainImage }: IProps) => {
  return (
    <div className="mb-10 w-full border lg:border-0">
      <Swiper
        slidesPerView={2}
        spaceBetween={0}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper xl:w-2/3"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={image._key} className="flex justify-center">
            <div className="flex items-center justify-center">
              <div className="relative h-[100px] w-[150px]">
                <Image
                  src={urlFor(image).url()}
                  alt="Product previews"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  quality={100}
                  onClick={() => setMainImage(image)}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default PreviewCarousel
