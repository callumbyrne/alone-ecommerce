import { sanityClient } from '../lib/client'
import {
  HeroBanner,
  FeatureBanner,
  Marquee,
  Newsletter,
  ProductCarousel,
} from '../components'
import { IProducts } from '../typeings'

const Home = ({ products }: IProducts) => {
  return (
    <div>
      <HeroBanner />
      <FeatureBanner />
      <Marquee />
      <ProductCarousel products={products} text="Trending:" />
      <Newsletter />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "product" && carousel == true]{
    _id,
    details,
    image,
    name,
    price,
    slug,
    variant,
    carousel,
  }`
  const products = await sanityClient.fetch(query)

  return {
    props: {
      products,
    },
  }
}

export default Home
