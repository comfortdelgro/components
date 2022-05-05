import { white, orange, red, yellow, green, blue, grey } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColors: {
    cdgBlue80: blue[80],
    cdgBlue40: blue[40],
    grey100: grey[100],
    white,
  },
  secondaryColors: {
    secondaryButton: blue.secondaryButton,
    cdgBlue60: blue[60],
    cdgBlue20: blue[20],
    orange,
    red,
    yellow,
    green,
  },
  disabled: grey[20],
  textOnDisabled: grey[60],
  buttonOutline: grey[20]
};

export const darkTheme = {};
