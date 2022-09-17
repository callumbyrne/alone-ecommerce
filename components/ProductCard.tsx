import { IProduct } from '../typeings'
import { urlFor } from '../lib/client'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  product: IProduct
}

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/products/${product.slug.current}`}>
      <div className="flex w-1/2 flex-col items-center justify-center md:w-1/3 lg:px-8 xl:px-10 xl:py-10">
        <div className="relative h-[150px] w-full">
          <Image
            src={urlFor(product.image[0]).url()}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
          />
        </div>
        <div className="text-center tracking-wider">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <h3 className="text-sm font-normal text-gray-400">
            ({product.variant})
          </h3>
          <h3 className="text-lg font-semibold">${product.price}</h3>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
