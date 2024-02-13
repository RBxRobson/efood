import CardList from '../../components/CardList'
import Header from '../../components/Header'
import Card from '../../models/Card'

import restaurante from '../../assets/images/hioki_sushi.png'

const cards: Card[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    rating: '4.8',
    title: 'Residente Evil 4',
    infos: ['Destaque do Dia', 'Italiana'],
    image: restaurante
  },
  {
    id: 2,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    rating: '4.8',
    title: 'Residente Evil 4',
    infos: ['Italiana'],
    image: restaurante
  },
  {
    id: 3,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    rating: '4.8',
    title: 'Residente Evil 4',
    infos: ['Italiana'],
    image: restaurante
  },
  {
    id: 4,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    rating: '4.8',
    title: 'Residente Evil 4',
    infos: ['Italiana'],
    image: restaurante
  }
]

const Home = () => {
  return (
    <>
      <Header model="primary" />
      <CardList columns={2} cards={cards} />
    </>
  )
}

export default Home
