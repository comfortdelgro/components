import {BaseProvider, createTheme} from 'baseui'
import * as React from 'react'
import {ThemeProvider} from 'styled-components'
import {
  Client as StyletronClient,
  Server as StyletronServer,
} from 'styletron-engine-atomic'
import {Provider as StyletronProvider} from 'styletron-react'
import {defaultTheme} from '../../utils/themes'
import {GlobalStyle} from '../GlobalStyle'

export interface Props {
  theme: typeof defaultTheme
  engine: StyletronClient | StyletronServer
}

export const Theme: React.FC<Props> = ({theme, engine, children}) => {
  const customizedTheme = createTheme(theme.primitives, theme.overrides)

  return (
    <ThemeProvider theme={customizedTheme}>
      <StyletronProvider value={engine}>
        <BaseProvider theme={customizedTheme}>
          <GlobalStyle />
          {children}
        </BaseProvider>
      </StyletronProvider>
    </ThemeProvider>
  )
}
