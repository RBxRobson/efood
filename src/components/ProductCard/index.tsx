import { Btn, CardContainer } from './styles'

type Props = {
  description: string
  image: string
  title: string
}

const ProductCard = ({ description, image, title }: Props) => {
  return (
    <CardContainer>
      <img src={image} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Btn>Adicionar ao carrinho</Btn>
    </CardContainer>
  )
}

export default ProductCard
