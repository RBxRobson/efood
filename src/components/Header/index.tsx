import * as S from './styles'
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <img src={logo} alt="Efood" />
        <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
      </S.HeaderContainer>
    </S.Header>
  )
}

export default Header
