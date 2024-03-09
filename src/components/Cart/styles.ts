import styled from 'styled-components'
import { colors } from '../../styles'

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  max-height: 728px;
  overflow-y: scroll;
  padding-right: 2px;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.hf_color};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${colors.bg_color};
  }
`

export const Item = styled.li`
  position: relative;
  display: flex;
  gap: 8px;
  padding: 8px;
  width: 100%;
  background-color: ${colors.hf_color};
  color: ${colors.txt_home_color};

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  .icon {
    cursor: pointer;
    position: absolute;
    bottom: 8px;
    right: 8px;
    width: 16px;
    height: 16px;
  }

  h4 {
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
  }
`

export const Amount = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px;
  margin-right: 4px;
  font-size: 14px;
  font-weight: bold;
`
