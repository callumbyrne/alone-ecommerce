import { sanityClient } from '../../lib/client'
import { IProducts } from '../../typeings'
import ProductCard from '../../components/ProductCard'
import Image from 'next/image'
import nineties from '../../public/nineties.png'
import pool from '../../public/pool.png'
import fire from '../../public/fire.gif'

const AllPage = ({ products }: IProducts) => {
  const halfIndex = products.length / 2 - 1
  const sortedProducts = [...products].sort((a, b) =>
    a.name > b.name ? 1 : -1
  )
  const firstHalfProducts = sortedProducts.filter((product, index) => {
    if (index <= halfIndex) return product
  })
  const secondHalfProducts = sortedProducts.filter((product, index) => {
    if (index > halfIndex) return product
  })

  return (
    <>
      <h2 className="pt-2 pb-4 text-center text-xl font-extrabold tracking-widest lg:hidden">
        "All Products"
      </h2>
      <div className="lg:mb-5 lg:flex lg:h-[400px] lg:bg-[url('../public/skybackground.webp')]">
        <div className="relative mb-5 h-[500px] md:h-[400px] lg:ml-16 lg:w-[400px] lg:translate-y-5 xl:ml-32">
          <Image
            src={pool}
            alt="glasses"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div className="absolute bottom-0">
            <Image src={fire} alt="spinning star" height={80} width={80} />
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <h2 className="hidden text-5xl font-semibold tracking-widest text-white lg:block xl:text-6xl">
            "All Products"
          </h2>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex max-w-7xl flex-wrap">
          {firstHalfProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
      <div className="lg:flex lg:h-[400px] lg:items-center lg:justify-center lg:bg-[#d3d327]">
        <div className="relative my-5 h-[280px] lg:h-[300px] lg:w-[800px] xl:w-[1000px]">
          <Image src={nineties} alt="glasses" layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className="flex justify-center pb-20">
        <div className="flex max-w-7xl flex-wrap">
          {secondHalfProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
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
    props: { products },
  }
}

export default AllPage
