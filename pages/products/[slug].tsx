import { useState, useEffect } from 'react'
import { sanityClient } from '../../lib/client'
import { IProduct, IParams, ISlug } from '../../typeings'
import Image from 'next/image'
import { urlFor } from '../../lib/client'
import PreviewCarousel from '../../components/PreviewCarousel'
import Link from 'next/link'
import ProductCarousel from '../../components/ProductCarousel'
import palms from '../../public/palms.png'

interface Props {
  product: IProduct
  carouselProducts: [IProduct]
  variants: IProduct[]
}

const ProductDetails = ({ product, carouselProducts, variants }: Props) => {
  const [mainImage, setMainImage] = useState(product.image[0])
  const [qty, setQty] = useState(1)

  // sets proper image when switching products
  useEffect(() => setMainImage(product.image[0]), [product])

  const filteredVariants = variants.filter(
    (variant) => variant._id !== product._id
  )

  return (
    <div>
      {/* Main image */}
      <div className="relative h-[300px]">
        <Image
          src={urlFor(mainImage).url()}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
      </div>
      {/* Image previews */}
      <PreviewCarousel images={product.image} setMainImage={setMainImage} />
      {/* Details */}
      <div className="mx-7 mb-10">
        <h2 className="text-2xl font-extrabold tracking-wider">
          {product.name}
        </h2>
        <h3 className="text-md pb-3 font-normal italic">({product.variant})</h3>
        <p>{product.details}</p>
        <div className="py-5 text-xl font-bold tracking-wider">
          ${product.price}.00
        </div>
        <div className="pb-5">
          <label htmlFor="quantity" className="pr-3 font-semibold">
            Qty:
          </label>
          <select
            name="quantity"
            id="quantity"
            onChange={(e) => setQty(parseInt(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-center">
          <button className="w-full rounded-lg bg-black py-4 font-bold tracking-wider text-white">
            Add To Cart
          </button>
        </div>
        <div className="my-5 border-t border-gray-400"></div>
      </div>
      {/* Variants */}
      <div className="mx-10 mb-5">
        <h2 className="font-bold tracking-wider">More colors:</h2>
        <div className="flex flex-row flex-wrap">
          {filteredVariants.map((variant) => (
            <Link key={variant._id} href={`/products/${variant.slug.current}`}>
              <div className="relative h-[100px] w-[150px]">
                <Image
                  src={urlFor(variant.image[0]).url()}
                  alt={variant.name}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  quality={100}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Shop All */}
      <div className="shopAll flex h-[250px] flex-col items-center justify-center">
        <h2 className="pb-3 text-2xl font-bold text-white drop-shadow-[1px_1px_black]">
          Looking for something else?
        </h2>
        <Link href={'/collections/all'}>
          <button className="w-56 rounded-lg bg-[#e6ff7b] py-5 px-4 text-lg font-bold tracking-wider shadow-[2px_2px_black]">
            Shop All
          </button>
        </Link>
      </div>
      {/* Carousel */}
      <div className="py-5">
        <ProductCarousel
          products={carouselProducts}
          text="You Might Also Like..."
        />
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
     slug {
       current
     }
   }
   `

  const products = await sanityClient.fetch(query)

  const paths = products.map((product: ISlug) => ({
    params: {
      slug: product.slug.current,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params: { slug } }: IParams) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`
  const product = await sanityClient.fetch(query)

  const carouselQuery = `*[_type == "product" && carousel == true]{
    _id,
    details,
    image,
    name,
    price,
    slug,
    variant,
    carousel,
  }`

  const variantsQuery = `*[_type == "product" && name == '${product.name}']`

  const carouselProducts = await sanityClient.fetch(carouselQuery)
  const variants = await sanityClient.fetch(variantsQuery)

  return {
    props: { product, carouselProducts, variants },
  }
}

export default ProductDetails
