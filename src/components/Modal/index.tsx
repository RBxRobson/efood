import { useSelector, useDispatch } from 'react-redux'

import icon from '../../assets/images/close.png'
import { RootReducer } from '../../redux'
import { close } from '../../redux/reducers/modal'
import { add } from '../../redux/reducers/cart'

import * as S from './styles'

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const Modal = () => {
  const dispatch = useDispatch()
  const { isOpen, item } = useSelector((state: RootReducer) => state.modal)

  const closeModal = () => {
    dispatch(close())
  }

  const addItem = () => {
    dispatch(add(item))
  }

  return (
    <S.Modal className={isOpen ? 'visible' : ''}>
      <S.ModalContent className="container">
        <S.Icon src={icon} alt="Ícone para fechar" onClick={closeModal} />
        <S.FoodImg src={item.foto} />
        <div>
          <h3>{item.nome}</h3>
          <p>
            {item.descricao} <br /> <br />
            Serve: de {item.porcao}
          </p>
          <button type="button" onClick={addItem}>
            Adicionar ao carrinho - {formatPrice(item.preco)}
          </button>
        </div>
      </S.ModalContent>
      <div className="overlay" onClick={closeModal}></div>
    </S.Modal>
  )
}

export default Modal
