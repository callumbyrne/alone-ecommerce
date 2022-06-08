import { useState } from 'react'
import { sanityClient } from '../../lib/client'
import { IProduct, IParams, ISlug } from '../../typeings'
import Image from 'next/image'
import { urlFor } from '../../lib/client'
import PreviewCarousel from '../../components/PreviewCarousel'

interface Props {
  product: IProduct
}

const ProductDetails = ({ product }: Props) => {
  const [mainImage, setMainImage] = useState(product.image[0])
  console.log(product.image)
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
      {/* Carousel */}
      {/* Shop All */}
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
  // console.log(slug)
  console.log(slug)
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`

  const product = await sanityClient.fetch(query)

  return {
    props: { product },
  }
}

export default ProductDetails
