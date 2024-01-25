import { createGlobalStyle } from 'styled-components'

const colors = {
  bg_color: '#FFF8F2',
  hf_color: '#FFEBD9',
  txt_home_color: '#E66767',
  white_default: '#ffffff'
}

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${colors.bg_color};
    color: ${colors.txt_home_color};
  }
`
