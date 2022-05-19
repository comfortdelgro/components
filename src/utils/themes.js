import { white, orange, red, yellow, green, blue, grey, neutral, purple } from "./colors";
import { lightShadow } from "./shadows";
import { primaryFont, secondaryFont } from "./typography";

// TODO:: Refactor all colors name to uppercase? eg. CDGBLUE80, G100
export const defaultTheme = {
  primaryColors: {
    B500: blue[500],
    cdgBlue80: blue[80],
    B50: blue[50],
    cdgBlue40: blue[40],
    grey100: grey[100],
    white,
  },
  secondaryColors: {
    secondaryButton: blue.secondaryButton,
    cdgBlue60: blue[60],
    cdgBlue20: blue[20],
    orange,

    R100: red[100],
    R500: red[500],
    R400: red[400],
    R50: red[50],

    Y500: yellow[500],
    Y75: yellow[75],

    G500: green[500],
    G400: green[400],
    G50: green[50],

    N800: neutral[800],
    N500: neutral[500],
    N40: neutral[40],
    N0: neutral[0],

    P500: purple[500],
    P400: purple[400],
    P50: purple[50],
  },
  disabled: grey[20],
  textOnDisabled: grey[60],
  outline: grey[20],
  
  shadows: {
    light: lightShadow,
  },

  primaryFont,
  secondaryFont,
};

export const darkTheme = {};
