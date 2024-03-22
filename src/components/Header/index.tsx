import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'

import { closeCart, openCart } from '../../redux/reducers/cart'
import { RootReducer } from '../../redux'

import * as S from './styles'

//* Criando uma tipagem para condicionar a exibição de acordo com o modelo do header
export type Props = {
  model: 'primary' | 'secondary'
}

const Header = ({ model }: Props) => {
  const dispatch = useDispatch()
  const { items, isOpenCart } = useSelector((state: RootReducer) => state.cart)

  const open = () => {
    if (items.length > 0 && !isOpenCart) {
      dispatch(openCart())
    } else if (items.length < 0) {
      alert('O carrinho está vazio')
    } else if (isOpenCart) {
      dispatch(closeCart())
    }
  }

  return (
    <S.Header model={model}>
      <S.HeaderContainer className="container">
        <img src={logo} alt="Efood" />

        {/* O modelo primário exibe o slogan, já no secundário exibimos
          o link 'restaurantes' para voltar a home e os dados do carrinho */}
        {model === 'primary' ? (
          <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
        ) : (
          <>
            <Link to="/">Restaurantes</Link>
            <p onClick={open}>{items.length} produto(s) no carrinho</p>
          </>
        )}
      </S.HeaderContainer>
    </S.Header>
  )
}

export default Header
