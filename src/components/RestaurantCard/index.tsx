import { Link } from 'react-router-dom'
import Rating from '../Rating'
import Tag from '../Tag'

import { Restaurant } from '../../types/restaurant'

import * as S from './styles'

type Props = {
  restaurant: Restaurant
}

export const upperCaseFirstLetter = (type: string) => {
  return type.charAt(0).toUpperCase() + type.slice(1)
}

const RestaurantCard = ({ restaurant }: Props) => {
  return (
    <S.CardContainer>
      <img src={restaurant.capa} />
      <S.Infos>
        {restaurant.destacado && <Tag>Destaque da semana</Tag>}
        <Tag>{upperCaseFirstLetter(restaurant.tipo)}</Tag>
      </S.Infos>
      <S.DescriptionContainer>
        <S.Title>
          <h2>{restaurant.titulo}</h2>
          <Rating>{restaurant.avaliacao}</Rating>
        </S.Title>
        <p>{restaurant.descricao}</p>
        <Link to={`/restaurant/${restaurant.id}`}>
          <S.Btn>Saiba Mais</S.Btn>
        </Link>
      </S.DescriptionContainer>
    </S.CardContainer>
  )
}

export default RestaurantCard
