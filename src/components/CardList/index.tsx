import Card from '../../models/Card'
import Product from '../Card'
import { List } from './styles'

export type Props = {
  columns: 3 | 2
  cards: Card[]
}

const CardList = ({ cards, columns }: Props) => {
  return (
    <div className="container">
      <List columns={columns}>
        {cards.map((card) => (
          <Product
            key={card.id}
            description={card.description}
            image={card.image}
            infos={card.infos}
            title={card.title}
            rating={card.rating !== undefined ? card.rating : ''}
          />
        ))}
      </List>
    </div>
  )
}

export default CardList
