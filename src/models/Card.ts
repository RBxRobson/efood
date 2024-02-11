class Card {
  infos: string[]
  description: string
  rating: string
  image: string
  title: string
  id: number

  constructor(
    infos: string[],
    description: string,
    rating: string,
    image: string,
    title: string,
    id: number
  ) {
    this.infos = infos
    this.description = description
    this.rating = rating
    this.image = image
    this.title = title
    this.id = id
  }
}

export default Card
