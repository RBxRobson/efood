import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const OrderContainer = styled.div`
  padding-right: 4px;

  h3 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
  }

  .card-number {
    width: 228px;
  }

  .card-code {
    width: 86px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    .card-code,
    .card-number {
      width: 100%;
    }
  }
`
