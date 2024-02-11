import { Link } from 'react-router-dom'
import Rating from '../Rating'
import Tag from '../Tag'

import {
  Btn,
  CardContainer,
  DescriptionContainer,
  Infos,
  Title
} from './styles'

//* Criando uma tipagem para reutilizar o componente
type Props = {
  infos: string[]
  description: string
  image: string
  rating: string
  title: string
}

const Card = ({ infos, description, image, title, rating }: Props) => {
  return (
    <CardContainer>
      <img src={image} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <DescriptionContainer>
        <Title>
          <h2>{title}</h2>
          <Rating>{rating}</Rating>
        </Title>
        <p>{description}</p>
        <Link to="/restaurant">
          <Btn>Saiba Mais</Btn>
        </Link>
      </DescriptionContainer>
    </CardContainer>
  )
}

export default Card
