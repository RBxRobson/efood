import { createGlobalStyle } from 'styled-components'

export const colors = {
  bg_color: '#FFF8F2',
  hf_color: '#FFEBD9',
  txt_home_color: '#E66767',
  white_default: '#ffffff',
  black_default: '#4B4B4B'
}

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.bg_color};
    color: ${colors.txt_home_color};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
