import { List } from './styles'

export type Props = {
  list: 'restaurant' | 'menu'
  children: JSX.Element
}

const CardList = ({ list, children }: Props) => {
  return (
    <div className="container">
      <List list={list}>{children}</List>
    </div>
  )
}

export default CardList
