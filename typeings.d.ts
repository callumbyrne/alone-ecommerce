export interface IProduct {
  carousel: boolean
  details: string
  image: [
    {
      asset: {
        _ref: string
      }
    }
  ]
  name: string
  slug: {
    current: string
  }
  variant: string
  _id: string
  price: string
}

export interface IProducts {
  products: [IProduct]
}
