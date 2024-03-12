import styled from 'styled-components'
import { colors } from '../../styles'

export const Btn = styled.button`
  cursor: pointer;
  border: none;
  width: 100%;
  padding: 4px;
  background-color: ${colors.hf_color};
  color: ${colors.txt_home_color};
  font-weight: bold;
  font-size: 14px;
  transition: ease-in 150ms;

  &:hover {
    filter: brightness(1.1);
  }
`
