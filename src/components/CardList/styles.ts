import styled from 'styled-components'

import { Props } from '.'
import { breakpoints } from '../../styles'

export const List = styled.ul<Omit<Props, 'restaurants'>>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.list === 'menu' ? '1fr 1fr 1fr' : '1fr 1fr'};
  column-gap: ${(props) => (props.list === 'menu' ? '32px' : '80px')};
  row-gap: ${(props) => (props.list === 'menu' ? '32px' : '48px')};
  margin-top: ${(props) => (props.list === 'menu' ? '56px' : '80px')};
  margin-bottom: 120px;

  @media (max-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: ${(props) =>
      props.list === 'menu' ? '1fr 1fr' : '1fr'};
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
