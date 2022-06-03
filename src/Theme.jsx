import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme, } from './utils';

import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, createTheme} from 'baseui';

const engine = new Styletron();
const mergedTheme = createTheme({
  ...LightTheme,
  primaryFontFamily: defaultTheme.primaryFontFamily,
});
console.debug("Theme", LightTheme);
const Theme = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <StyletronProvider value={engine}>
      <BaseProvider theme={mergedTheme}>
        <GlobalStyle/>
        {children}
      </BaseProvider>
    </StyletronProvider>
  </ThemeProvider>
);

export default Theme;