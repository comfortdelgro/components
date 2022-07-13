import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme } from './utils';

import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {BaseProvider, createTheme} from 'baseui';

const Theme = ({ theme, engine, children }) => {
  const customizedTheme = createTheme(theme.primitives, theme.overrides);
  return (
    <ThemeProvider theme={customizedTheme}>
      <StyletronProvider value={engine}>
        <BaseProvider theme={customizedTheme}>
          <GlobalStyle/>
          {children}
        </BaseProvider>
      </StyletronProvider>
    </ThemeProvider>
  );
};

Theme.propTypes = {
  theme: PropTypes.object.isRequired,
  engine: PropTypes.object.isRequired,
  children: PropTypes.any,
};

Theme.defaultProps = {
  theme: defaultTheme,
};

export default Theme;