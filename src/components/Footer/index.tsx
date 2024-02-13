import * as S from './styles'
import logo from '../../assets/images/logo.png'

import instagram from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'
import facebook from '../../assets/images/facebook.svg'

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterContainer className="container">
        <img className="logo" src={logo} alt="Efood" />
        <S.SocialLinks>
          <li>
            <a href="#">
              <img src={instagram} alt="Logo instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={facebook} alt="Logo facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="Logo twitter" />
            </a>
          </li>
        </S.SocialLinks>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </p>
      </S.FooterContainer>
    </S.Footer>
  )
}

export default Footer
