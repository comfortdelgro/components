import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme } from './utils';

import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, createTheme} from 'baseui';

const Theme = ({ theme, children }) => {
  const engine = new Styletron();
  const mergedTheme = createTheme({
    ...LightTheme,
    primaryFontFamily: theme.primaryFontFamily,
  }, theme);
  return (
    <ThemeProvider theme={theme}>
      <StyletronProvider value={engine}>
        <BaseProvider theme={mergedTheme}>
          <GlobalStyle/>
          {children}
        </BaseProvider>
      </StyletronProvider>
    </ThemeProvider>
  );
};

Theme.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.any,
};

Theme.defaultProps = {
  theme: defaultTheme,
};

export default Theme;