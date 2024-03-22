import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'
import { Props } from '.'

import bgImage from '../../assets/images/background_header.svg'

export const Header = styled.header<Props>`
  background-color: ${colors.hf_color};
  background-image: url(${bgImage});
  padding: 40px 0;
  padding-bottom: ${(props) => (props.model === 'primary' ? '40px' : '66px')};

  img {
    width: 125px;

    @media (max-width: ${breakpoints.mobile}) {
      width: 100px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    position: sticky;
    top: 0;
    z-index: 1;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;

  //* Estilos para o modelo primário de cabeçalho
  flex-direction: column;
  gap: 138px;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 30px;
  }

  //* Estilos para o modelo secundário de cabeçalho
  position: relative;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
  }

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
    cursor: pointer;
    position: absolute;
    right: 0;

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 100px;
      text-align: center;
    }
  }

  h1 {
    font-size: 36px;
    text-align: center;
    max-width: 540px;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 30px;
    }
  }
`
