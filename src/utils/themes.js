import { orange, red, yellow, green, blue, grey } from "./colors";
import { lightShadow } from "./shadows";
import { primaryFontFamily, secondaryFont } from "./typography";

export const defaultTheme = {
  primaryColors: {
    blue: blue[100],
    orange: orange[60],
    red: red[60],
    yellow: yellow[100],
    green: green[60],
    white: grey[0],
  },
  secondaryColors: {
    blue: blue[100],
    red: red[60],
    white: grey[0],

    linkBlue: blue.secondaryLinkBlue,
    text: grey[100],
    label: grey[80],
    helper: grey[60],
  },
  hoveredColors: {
    button: blue[120],
    control: blue[20],
  },
  disabledColors: {
    text: grey[60],
    control: grey.disabled[40],
    helper: grey.disabled[40],
    button: grey[20],
    inputBg: grey[10],
  },
  placeholderColor: grey[40],
  outline: grey[20],
  outline10: grey[10],
  
  shadows: {
    light: lightShadow,
  },

  primaryFontFamily,
  secondaryFont,

  // base web overrides
  colors: {
    borderSelected: blue[100],

    inputBorder: grey[10],
    inputBorderError: red[60],
    inputFill: grey[0],
    inputFillActive: grey[0],
    inputFillError: grey[0],
    inputFillDisabled: grey[10],
    inputText: grey[80],
    inputTextDisabled: grey[60],
    inputTextError: grey[100],
    inputPlaceholder: grey[40],
  }
};

export const darkTheme = {};
