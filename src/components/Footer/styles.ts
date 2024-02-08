import styled from 'styled-components'

import { Container } from '../../styles'
import { colors } from '../../styles'

export const Footer = styled.footer`
  background-color: ${colors.hf_color};
  padding: 40px 0;

  .logo {
    width: 125px;
  }
`

export const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    max-width: 480px;
    font-size: 10px;
    text-align: center;
  }
`

export const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 80px;
  gap: 8px;

  li {
    cursor: pointer;
    transition: all ease 200ms;

    &:hover {
      transform: scale(1.1);
    }
  }
`
