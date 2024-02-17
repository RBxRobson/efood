import styled from 'styled-components'

import { Props } from '.'

export const List = styled.ul<Omit<Props, 'cards'>>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.columns === 3 ? '1fr 1fr 1fr' : '1fr 1fr'};
  column-gap: ${(props) => (props.columns === 3 ? '32px' : '80px')};
  row-gap: ${(props) => (props.columns === 3 ? '32px' : '48px')};
  margin-top: ${(props) => (props.columns === 3 ? '56px' : '80px')};
  margin-bottom: 120px;
`
