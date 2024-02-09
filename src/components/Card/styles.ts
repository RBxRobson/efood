import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const CardContainer = styled.li`
  position: relative;
  background-color: ${colors.white_default};

  p {
    font-size: 14px;
    line-height: 22px;
    padding: 16px 0;
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
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

//* Usando o estilo da tag mas alterando o HTML para button
export const Btn = styled(TagContainer).attrs({ as: 'button' })`
  padding: 4px 6px;
  border: none;
`
