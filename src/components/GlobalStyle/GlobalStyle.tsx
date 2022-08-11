import {normalize} from 'polished'
import {createGlobalStyle} from 'styled-components'

// todo: uh what?? why is the google font import here?

export const GlobalStyle = createGlobalStyle`
${normalize()}
html {
  box-sizing: border-box;
  font-size: 16px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
`
