import { Restaurant } from '../../types/restaurant'
import RestaurantCard from '../RestaurantCard'
import ProductCard from '../ProductCard'

import { List } from './styles'

export type Props = {
  list: 'restaurant' | 'menu'
  restaurants: Restaurant[]
}

const CardList = ({ list, restaurants }: Props) => {
  //* Array para armazenar os restaurantes em ordem de prioridade a partir do destaque
  const sortedRestaurants = [...restaurants].sort((restaurant) =>
    restaurant.destacado ? -1 : 1
  )

  return (
    <div className="container">
      <List list={list}>
        {sortedRestaurants.map((restaurant) => {
          return list === 'restaurant' ? (
            <RestaurantCard
              key={restaurant.id}
              description={restaurant.descricao}
              image={restaurant.capa}
              type={restaurant.tipo}
              title={restaurant.titulo}
              rating={restaurant.avaliacao}
              featured={restaurant.destacado}
            />
          ) : (
            <ProductCard
              key={restaurant.cardapio.id}
              description={restaurant.cardapio.descricao}
              image={restaurant.cardapio.foto}
              name={restaurant.cardapio.nome}
            />
          )
        })}
      </List>
    </div>
  )
}

export default CardList
