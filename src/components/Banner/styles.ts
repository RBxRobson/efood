import styled from 'styled-components'

import { Container } from '../../styles'
import { colors } from '../../styles'

export const Banner = styled.div`
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;

  //* Filtro escuro sobre a imagem
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
`

export const BannerContainer = styled(Container)`
  position: relative;
  height: 280px;
  font-size: 32px;
  color: ${colors.white_default};

  p {
    position: absolute;
    top: 32px;
    left: 0;
    font-weight: 100;
  }

  h2 {
    position: absolute;
    bottom: 32px;
    left: 0;
  }
`
