import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import CardList from '../../components/CardList'
import Header from '../../components/Header'
import { Menu, Restaurant as RestaurantType } from '../../types/restaurant'
import ProductCard from '../../components/ProductCard'
import Modal from '../../components/Modal'

interface ModalState extends Omit<Menu, 'id'> {
  isVisible: boolean
}

const Restaurant = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<RestaurantType>()
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    foto: '',
    nome: '',
    descricao: '',
    porcao: '',
    preco: 0
  })

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((restaurant) => setRestaurant(restaurant))
  }, [id])

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  const closeModal = () => {
    setModal({ ...modal, isVisible: false })
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
            <ProductCard
              key={menu.id}
              description={menu.descricao}
              name={menu.nome}
              image={menu.foto}
              onClick={() =>
                setModal({
                  isVisible: true,
                  foto: menu.foto,
                  nome: menu.nome,
                  descricao: menu.descricao,
                  porcao: menu.porcao,
                  preco: menu.preco
                })
              }
            />
          ))}
        </>
      </CardList>
      <Modal
        isVisible={modal.isVisible}
        image={modal.foto}
        name={modal.nome}
        description={modal.descricao}
        portion={modal.porcao}
        price={modal.preco}
        closeModal={closeModal}
      />
    </>
  )
}

export default Restaurant
