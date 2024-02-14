import Restaurant from '../../models/Restaurant'
import Product from '../../models/Product'
import RestaurantCard from '../RestaurantCard'
import { List } from './styles'
import ProductCard from '../ProductCard'

export type Props = {
  columns: 3 | 2
  cards: (Restaurant | Product)[]
}

const CardList = ({ cards, columns }: Props) => {
  return (
    <div className="container">
      <List columns={columns}>
        {cards.map((card) => {
          if ('infos' in card) {
            const restaurant = card as Restaurant
            return (
              <RestaurantCard
                key={restaurant.id}
                description={restaurant.description}
                image={restaurant.image}
                infos={restaurant.infos}
                title={restaurant.title}
                rating={restaurant.rating}
              />
            )
          } else {
            const product = card as Product
            return (
              <ProductCard
                key={product.id}
                description={product.description}
                image={product.image}
                title={product.title}
              />
            )
          }
        })}
      </List>
    </div>
  )
}

export default CardList
