import icon from '../../assets/images/close.png'

import * as S from './styles'

type Props = {
  image: string
  name: string
  description: string
  portion: string
  price: number
  isVisible: boolean
}

const Modal = ({
  image,
  name,
  description,
  portion,
  price,
  isVisible
}: Props) => {
  return (
    <S.Modal className={isVisible ? 'visible' : ''}>
      <S.ModalContent className="container">
        <S.Icon
          src={icon}
          alt="Ícone para fechar"
          onClick={() => {
            isVisible = false
          }}
        />
        <S.FoodImg src={image} />
        <div>
          <h3>{name}</h3>
          <p>
            {description} <br /> <br />
            Serve: de {portion}
          </p>
          <button>Adicionar ao carrinho - R$ {price}</button>
        </div>
      </S.ModalContent>
      <div
        className="overlay"
        onClick={() => {
          isVisible = false
        }}
      ></div>
    </S.Modal>
  )
}

export default Modal
