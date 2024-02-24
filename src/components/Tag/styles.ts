import styled from 'styled-components'
import { colors } from '../../styles'

import { Props } from '.'

//* Usando a props passada no componente
export const TagContainer = styled.div<Props>`
  display: inline-block;
  padding: 6px 8px;
  font-size: 12px;
  font-weight: bold;
  background-color: ${colors.txt_home_color};
  color: ${colors.hf_color};
`
