import { IProducts } from '../typeings'
import ProductCard from './CarouselCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'

const ProductCarousel = ({ products }: IProducts) => {
  return (
    <div className="mt-10 mb-20">
      <h2 className="pb-5 text-center text-2xl font-bold tracking-wider">
        Trending:
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
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProductCarousel
