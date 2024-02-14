class Product {
  image: string
  title: string
  description: string
  id: number

  constructor(description: string, image: string, title: string, id: number) {
    this.description = description
    this.image = image
    this.title = title
    this.id = id
  }
}

export default Product
