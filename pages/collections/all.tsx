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
      <h2 className="pt-2 pb-4 text-center text-xl font-extrabold tracking-widest">
        "All Products"
      </h2>
      <div className="relative mb-5 h-[500px]">
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
      <div className="flex flex-wrap">
        {firstHalfProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className="my-5 block">
        <Image
          src={nineties}
          alt="glasses"
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-wrap pb-20">
        {secondHalfProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
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
