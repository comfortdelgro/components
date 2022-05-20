import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme, } from './utils';

import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';

const engine = new Styletron();


const Theme = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        {children}
      </BaseProvider>
    </StyletronProvider>
    <GlobalStyle />
  </ThemeProvider>
);

export default Theme;