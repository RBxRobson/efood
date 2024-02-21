import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const CardContainer = styled.li`
  position: relative;
  background-color: ${colors.white_default};

  & > img {
    width: 100%;
    height: 218px;
    object-fit: cover;
    object-position: center;
  }
`

export const Infos = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  top: 16px;
  right: 16px;
`

export const DescriptionContainer = styled.div`
  padding: 8px;
  border: 1px solid ${colors.txt_home_color};
  border-top: none;
  margin-top: -4px;

  p {
    font-size: 14px;
    line-height: 22px;
    padding: 16px 0;
    height: 142px;
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 18px;
  }
`

//* Usando o estilo da tag mas alterando o HTML para button
export const Btn = styled(TagContainer).attrs({ as: 'button' })`
  font-size: 14px;
  padding: 4px 6px;
  cursor: pointer;
  border: none;

  &:hover {
    filter: brightness(1.1);
  }
`
