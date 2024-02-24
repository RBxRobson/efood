import styled from 'styled-components'
import { colors } from '../../styles'

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  color: ${colors.hf_color};
  background-color: ${colors.txt_home_color};

  h3 {
    font-size: 16px;
  }

  p {
    display: -webkit-box; //* Modelo em bloco de linha
    -webkit-box-orient: vertical; //* Direcionamento da linha
    -webkit-line-clamp: 4; //* Quantidade de linhas
    overflow: hidden; //* Corte do excedente
    text-overflow: ellipsis; //* Adição de reticencias ao final
    font-size: 14px;
    line-height: 22px;
  }

  img {
    width: 100%;
    height: 168px;
  }
`

export const Btn = styled.button`
  cursor: pointer;
  border: none;
  width: 100%;
  padding: 4px;
  background-color: ${colors.hf_color};
  color: ${colors.txt_home_color};
  font-weight: bold;
  font-size: 14px;
  transition: ease-in 150ms;

  &:hover {
    filter: brightness(1.1);
  }
`
