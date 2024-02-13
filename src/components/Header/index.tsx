import * as S from './styles'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

//* Criando uma tipagem para condicionar a exibição de acordo com o modelo do header
export type Props = {
  model: 'primary' | 'secondary'
}

const Header = ({ model }: Props) => {
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
            <Link to="/">
              <a>Restaurantes</a>
            </Link>
            <p>0 produto(s) no carrinho</p>
          </>
        )}
      </S.HeaderContainer>
    </S.Header>
  )
}

export default Header
