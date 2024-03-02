import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import CardList from '../../components/CardList'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import Modal from '../../components/Modal'

import { useGetRestaurantQuery } from '../../services/api'

const Restaurant = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetRestaurantQuery(id!)

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header model="secondary" />
      <Banner
        image={restaurant.capa}
        title={restaurant.titulo}
        type={restaurant.tipo}
      />
      <CardList list="menu">
        <>
          {restaurant.cardapio.map((menu) => (
            <ProductCard key={menu.id} menu={menu} />
          ))}
        </>
      </CardList>
      <Modal />
    </>
  )
}

export default Restaurant
