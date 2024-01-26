import styled from 'styled-components'

import { Container } from '../../styles'
import { colors } from '../../styles'

import bgImage from '../../assets/images/background_header.svg'

export const Header = styled.header`
  background-color: ${colors.hf_color};
  background-image: url(${bgImage});
  padding: 40px 0;

  img {
    width: 125px;
  }

  h1 {
    font-size: 36px;
    text-align: center;
  }
`

export const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 136px;
`
