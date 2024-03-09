import styled from 'styled-components'
import { colors } from '../../styles'

export const Form = styled.form`
  padding-right: 4px;

  button {
    display: block;
    width: 100%;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
  }

  h4 {
    margin-bottom: 16px;
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  label {
    margin-bottom: 8px;
    color: ${colors.hf_color};
  }

  input {
    outline: none;
    border: 1px solid ${colors.hf_color};
    background-color: ${colors.hf_color};
    color: ${colors.black_default};
    padding: 8px;
    width: 100%;
    transition: all 400ms ease;

    &:focus {
      transition: all 400ms ease;
      border: 1px solid ${colors.black_default};
    }
  }

  label,
  input {
    font-size: 14px;
    font-weight: bold;
  }
`
