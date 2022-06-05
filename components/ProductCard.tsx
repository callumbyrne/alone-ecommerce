import { IProduct } from '../typeings'
import { urlFor } from '../lib/client'
import Image from 'next/image'

interface Props {
  product: IProduct
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="flex w-1/2 flex-col items-center justify-center">
      <div className="relative h-[150px] w-full">
        <Image
          src={urlFor(product.image[0]).url()}
          alt={product.name}
          layout="fill"
          objectFit="scale-down"
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
  )
}

export default ProductCard
