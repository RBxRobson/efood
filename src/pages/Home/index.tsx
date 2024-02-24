import { useEffect, useState } from 'react'
import CardList from '../../components/CardList'
import Header from '../../components/Header'
import { Restaurant } from '../../types/restaurant'
import RestaurantCard from '../../components/RestaurantCard'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  //* Array para armazenar os restaurantes em ordem de prioridade a partir do destaque
  const sortedRestaurants = [...restaurants].sort((restaurant) =>
    restaurant.destacado ? -1 : 1
  )

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
