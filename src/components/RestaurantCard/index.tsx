import { Link } from 'react-router-dom'
import Rating from '../Rating'
import Tag from '../Tag'

import * as S from './styles'

type Props = {
  type: string
  description: string
  image: string
  rating: number
  title: string
  featured: boolean
}

const RestaurantCard = ({
  type,
  description,
  image,
  title,
  rating,
  featured
}: Props) => {
  const upperCaseFirstLetter = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1)
  }

  return (
    <S.CardContainer>
      <img src={image} />
      <S.Infos>
        {featured === true && <Tag>Destaque da semana</Tag>}
        <Tag>{upperCaseFirstLetter(type)}</Tag>
      </S.Infos>
      <S.DescriptionContainer>
        <S.Title>
          <h2>{title}</h2>
          <Rating>{rating}</Rating>
        </S.Title>
        <p>{description}</p>
        <Link to="/restaurant">
          <S.Btn>Saiba Mais</S.Btn>
        </Link>
      </S.DescriptionContainer>
    </S.CardContainer>
  )
}

export default RestaurantCard
