export interface IProduct {
  quantity: number
  carousel: boolean
  details: string
  image: [
    {
      asset: {
        _ref: string
      }
      _key: string
    }
  ]
  name: string
  slug: {
    current: string
  }
  variant: string
  _id: string
  price: number
}

export interface IProducts {
  products: [IProduct]
}

export interface IParams {
  params: {
    slug: string
  }
}

export interface ISlug {
  slug: {
    current: string
  }
}
