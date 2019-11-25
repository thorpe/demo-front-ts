/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core'
import 'antd-mobile/dist/antd-mobile.css'

import { ThemeProvider } from 'emotion-theming'
import { Theme } from '@themes/theme'
import TamarsTheme from '@themes/tamars.theme'
import IntlWrapper from './IntlWrapper'
import Provider from './Provider'
import Routers from '@routes/Index'

const GlobalStyle = (theme: Theme) => css`
    * {
    font-family: 'Roboto', 'Noto Sans CJK KR', 'Malgun Gothic', '맑은 고딕', 'Apple SD Gothic Neo', '돋움', dotum, sans-serif !important;
    user-select: none;
  }
  
  
  html {
    font-size: 10px;
  }
  
  body {
    font-size: 1rem;
    font-weight: 600;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    z-index: -1;
    width: 100%;
  }
  input,
  label,

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${theme.color.themeTxt};
  }
  p,
  span,
  div,
  a {
    margin-bottom: 0;
    font-size: 12px;
    color: ${theme.color.themeTxt};
  }
  a {
    &:hover {
      color: ${theme.color.primary};
    }
  }
  p {
    display: inline-block;
  }
  ul,
  ol,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  svg,
  svg path {
    fill: currentcolor;
  }
  
  #app {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
  
`

function App() {

  console.log(new Date() + 'Container > Shared > App > index')

  return (
    <ThemeProvider theme={TamarsTheme}>
      <Provider>
        <Global styles={GlobalStyle} />
        <IntlWrapper>
          {Routers()}
        </IntlWrapper>
      </Provider>
    </ThemeProvider>
  )
}

export default App
