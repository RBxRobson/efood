import styled from 'styled-components'

import { colors } from '../../styles'
import { Props } from '.'

import bgImage from '../../assets/images/background_header.svg'

export const Header = styled.header<Props>`
  background-color: ${colors.hf_color};
  background-image: url(${bgImage});
  padding: 40px 0;
  padding-bottom: ${(props) => (props.model === 'primary' ? '40px' : '66px')};

  img {
    width: 125px;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;

  //* Estilos para o modelo primário de cabeçalho
  flex-direction: column;
  gap: 138px;

  //* Estilos para o modelo secundário de cabeçalho
  position: relative;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;

  a {
    position: absolute;
    left: 0;
    color: ${colors.txt_home_color};
    text-decoration: none;
    transition: ease-in 100ms;

    &:hover {
      filter: opacity(0.9);
    }
  }

  p {
    position: absolute;
    right: 0;
  }

  h1 {
    font-size: 36px;
    text-align: center;
    max-width: 540px;
  }
`
