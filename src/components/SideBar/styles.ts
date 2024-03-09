import styled from 'styled-components'
import { colors } from '../../styles'

export const CartContainer = styled.div`
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
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
`
