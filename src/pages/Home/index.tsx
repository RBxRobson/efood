import CardList from '../../components/CardList'
import Header from '../../components/Header'
import Restaurant from '../../models/Restaurant'

import hioki from '../../assets/images/hioki_sushi.png'
import trattoria from '../../assets/images/la_dolce.png'

const cards: Restaurant[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    rating: '4.9',
    title: 'Hioki Sushi',
    infos: ['Destaque do Dia', 'Japonesa'],
    image: hioki
  },
  {
    id: 2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: '4.6',
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    image: trattoria
  },
  {
    id: 3,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: '4.6',
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    image: trattoria
  },
  {
    id: 4,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: '4.6',
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    image: trattoria
  },
  {
    id: 5,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: '4.6',
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    image: trattoria
  },
  {
    id: 6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: '4.6',
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    image: trattoria
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
