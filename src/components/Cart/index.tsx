import { useDispatch, useSelector } from 'react-redux'

import icon from '../../assets/images/lixeira-de-reciclagem 1.png'

import { formatPrice } from '../Modal'
import { Btn } from '../ProductCard/styles'
import { closeCart, remove } from '../../redux/reducers/cart'
import { RootReducer } from '../../redux'

import * as S from './styles'

const Cart = ({ onClickNext }: SideBarProps) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const removeItem = (id: number) => {
    if (items.length === 1) {
      dispatch(remove(id))
      dispatch(closeCart())
    } else {
      dispatch(remove(id))
    }
  }

  const getTotalPrice = () => {
    return items.reduce((items, item) => {
      return (items += item.preco)
    }, 0)
  }

  return (
    <>
      <S.List>
        {items.map((item) => (
          <S.Item key={item.id}>
            <img
              className="icon"
              src={icon}
              alt="Ícone de uma lixeira"
              onClick={() => removeItem(item.id)}
            />
            <img src={item.foto} alt={item.nome} />
            <div>
              <h4>{item.nome}</h4>
              <span>{formatPrice(item.preco)}</span>
            </div>
          </S.Item>
        ))}
      </S.List>
      <S.Amount>
        <p>Valor total</p>
        <span>{formatPrice(getTotalPrice())}</span>
      </S.Amount>
      <Btn
        title="Clique aqui para continuar com a entrega"
        type="button"
        style={{ width: '99%' }}
        onClick={onClickNext}
      >
        Continuar com a entrega
      </Btn>
    </>
  )
}

export default Cart
