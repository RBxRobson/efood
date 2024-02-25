import icon from '../../assets/images/close.png'

import * as S from './styles'

type Props = {
  image: string
  name: string
  description: string
  portion: string
  price: number
  isVisible: boolean
  closeModal: () => void
}

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const Modal = ({
  image,
  name,
  description,
  portion,
  price,
  isVisible,
  closeModal
}: Props) => {
  return (
    <S.Modal className={isVisible ? 'visible' : ''}>
      <S.ModalContent className="container">
        <S.Icon src={icon} alt="Ícone para fechar" onClick={closeModal} />
        <S.FoodImg src={image} />
        <div>
          <h3>{name}</h3>
          <p>
            {description} <br /> <br />
            Serve: de {portion}
          </p>
          <button>Adicionar ao carrinho - {formatPrice(price)}</button>
        </div>
      </S.ModalContent>
      <div className="overlay" onClick={closeModal}></div>
    </S.Modal>
  )
}

export default Modal
