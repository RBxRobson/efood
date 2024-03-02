import { useGetRestaurantsQuery } from '../../services/api'

import CardList from '../../components/CardList'
import Header from '../../components/Header'
import RestaurantCard from '../../components/RestaurantCard'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  //* Array para armazenar os restaurantes em ordem de prioridade a partir do destaque
  const sortedRestaurants = restaurants
    ? [...restaurants!].sort((restaurant) => (restaurant.destacado ? -1 : 1))
    : []

  return (
    <>
      <Header model="primary" />
      <CardList list="restaurant">
        <>
          {sortedRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </>
      </CardList>
    </>
  )
}

export default Home
