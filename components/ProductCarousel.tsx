import { IProduct } from '../typeings'
import CarouselCard from './CarouselCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'

interface Props {
  products: [IProduct]
  text: string
}

const ProductCarousel = ({ products, text }: Props) => {
  return (
    <div className="mt-10 mb-10">
      <h2 className="pb-5 text-center text-3xl font-bold tracking-wider">
        {text}
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product._id}>
            <CarouselCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProductCarousel
