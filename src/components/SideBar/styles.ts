import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const CartContainer = styled.div`
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }

  @media (max-width: ${breakpoints.mobile}) {
    .overlay {
      display: none;
    }
  }
`

export const SideBar = styled.aside`
  position: fixed;
  right: 0;
  top: 0;
  width: 360px;
  height: 100%;
  padding: 32px 4px 0 8px;
  padding-bottom: 0;
  background-color: ${colors.txt_home_color};
  color: ${colors.hf_color};

  @media (max-width: ${breakpoints.mobile}) {
    top: 120px;
    width: 100%;
    z-index: 1;
  }
`
