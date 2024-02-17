import { Link } from 'react-router-dom'
import Rating from '../Rating'
import Tag from '../Tag'

import * as S from './styles'

type Props = {
  infos: string[]
  description: string
  image: string
  rating: string
  title: string
}

const RestaurantCard = ({
  infos,
  description,
  image,
  title,
  rating
}: Props) => {
  return (
    <S.CardContainer>
      <img src={image} />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
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
