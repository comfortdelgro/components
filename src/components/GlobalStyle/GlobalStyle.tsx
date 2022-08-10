import {normalize} from 'polished'
import {createGlobalStyle} from 'styled-components'

// todo: uh what?? why is the google font import here?

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Poppins");

${normalize()}
html {
  box-sizing: border-box;
  font-size: 16px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
`
