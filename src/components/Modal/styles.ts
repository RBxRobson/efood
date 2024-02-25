import styled from 'styled-components'
import { colors } from '../../styles'

export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  padding: 32px;
  gap: 24px;
  width: 100%;
  height: 346px;
  background-color: ${colors.txt_home_color};

  div {
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: ${colors.white_default};

    h3 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
    }

    button {
      font-size: 14px;
      width: fit-content;
      border: none;
      padding: 4px 6px;
      background-color: ${colors.hf_color};
      color: ${colors.txt_home_color};
      font-weight: bold;
    }
  }
`

export const FoodImg = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`

export const Icon = styled.img`
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2;
`
