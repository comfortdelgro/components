import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme, } from './utils';

const Theme = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    {children}
    <GlobalStyle />
  </ThemeProvider>
);

export default Theme;