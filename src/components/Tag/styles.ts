import styled from 'styled-components'
import { colors } from '../../styles'

import { Props } from '.'

//* Usando a props passada no componente
export const TagContainer = styled.div<Props>`
  display: inline-block;
  border-radius: 8px;
  padding: 6px;
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: bold;
  background-color: ${colors.txt_home_color};
  color: ${colors.hf_color};
`
