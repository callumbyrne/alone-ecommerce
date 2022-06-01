import { sanityClient } from '../lib/client'
import {
  HeroBanner,
  FeatureBanner,
  Marquee,
  Newsletter,
  ProductCarousel,
  ProductCard,
} from '../components'
import { IProducts } from '../typeings'

const Home = ({ products }: IProducts) => {
  return (
    <div>
      <HeroBanner />
      <FeatureBanner />
      <Marquee />
      <ProductCarousel products={products} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "product"]{
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
