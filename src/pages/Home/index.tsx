import { useEffect, useState } from 'react'
import CardList from '../../components/CardList'
import Header from '../../components/Header'
import { Restaurant } from '../../types/restaurant'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <>
      <Header model="primary" />
      <CardList list="restaurant" restaurants={restaurants} />
    </>
  )
}

export default Home
