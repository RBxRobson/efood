import styled from 'styled-components'

import { Props } from '.'

export const List = styled.ul<Omit<Props, 'cards'>>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.columns === 3 ? '1fr 1fr 1fr' : '1fr 1fr'};
  column-gap: 80px;
  row-gap: 48px;
  margin-top: 80px;
`
