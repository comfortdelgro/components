import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import sizing from "./sizing";
import {
  primaryFontFamily,
  headingScales,
  labelScales,
  contentScales,
  tableScales,
  formControlScales,
  navBarScales,
  buttonScales
} from "./typography";

export const defaultTheme = {
  primitives: {
    primaryFontFamily,
  },

  overrides: {
    borderSelected: colors.primary.cdgBlue,

    breakpoints,

    mediaQuery: {
      small: `@media screen and (min-width: ${breakpoints.small})`,
      medium: `@media screen and (min-width: ${breakpoints.medium})`,
      large: `@media screen and (min-width: ${breakpoints.large})`,
    },

    colors: {
      primary: colors.primary.cdgBlue,
      primaryA: colors.primary.grey100,
      primaryB: colors.primary.white,

      borderSelected: colors.primary.cdgBlue,

      contentPrimary: colors.shades.grey100,
      contentSecondary: colors.shades.grey60,
      contentTertiary: colors.shades.grey40,

      buttonPrimaryFill: colors.primary.cdgBlue,
      buttonPrimaryText: colors.primary.white,
      buttonPrimaryHover: colors.shades.cdgBlue120,

      buttonSecondaryFill: colors.primary.white,
      buttonSecondaryText: colors.primary.cdgBlue,
      buttonSecondaryBorder: colors.primary.cdgBlue,
      buttonSecondaryHoverFill: colors.shades.grey10,
      buttonSecondaryHoverText: colors.shades.cdgBlue120,
      buttonSecondaryHoverBorder: colors.shades.cdgBlue120,

      buttonNegativeFill: colors.primary.white,
      buttonNegativeText: colors.secondary.red,
      buttonNegativeBorder: colors.secondary.red,
      buttonNegativeHoverFill: colors.shades.grey10,

      buttonTertiaryFill: colors.transparent,
      buttonTertiaryText: colors.shades.grey60,
      buttonTertiaryBorder: colors.transparent,
      buttonTertiaryHoverFill: colors.shades.grey10,

      buttonDisabledFill: colors.shades.grey20,
      buttonDisabledText: colors.shades.grey60,

      inputBorder: colors.shades.grey20,
      inputBorderError: colors.secondary.red,
      inputFill: colors.primary.white,
      inputFillActive: colors.primary.white,
      inputFillError: colors.primary.white,
      inputFillDisabled: colors.shades.grey20,
      inputText: colors.shades.grey100,
      inputTextDisabled: colors.shades.grey60,
      inputPlaceholder: colors.shades.grey40,
      inputStartEnhancer: colors.secondary.linkBlue,

      linkText: colors.shades.grey60,
      linkHover: colors.shades.cdgBlue80,
      linkActive: colors.shades.cdgBlue80,
      linkVisited: colors.shades.grey60,

      tableHeadBackgroundColor: colors.background.layer1,
      tableBodyCellText: colors.shades.grey60,

      tickFillSelected: colors.primary.cdgBlue,
      tickFillSelectedHover: colors.shades.cdgBlue20,
      tickFillHover: colors.shades.cdgBlue20,
      tickBorder: colors.shades.grey20,
      tickBorderHover: colors.shades.cdgBlue20,
      tickBorderFocus: colors.secondary.linkBlue,
      tickText: colors.shades.grey100,
      tickTextDisabled: colors.shades.grey100,

      radioButtonBorder: colors.shades.grey20,
      radioButtonBorderSelected: colors.shades.cdgBlue100,
      radioButtonBorderHovered: colors.shades.cdgBlue20,
      radioButtonFill: colors.primary.white,
      radioButtonFillSelected: colors.shades.cdgBlue100,
      radioButtonFillHovered: colors.shades.cdgBlue20,
      radioButtonBorderDisabled: colors.shades.grey40,
      radioButtonFillDisabled: colors.shades.grey40,
      radioButtonMarkFill: colors.primary.white,

      sideBarFill: colors.background.sidebar,
      sideBarItemHoverFill: colors.primary.cdgBlue,
      sideBarItemText: colors.neutrals[100],
      sideBarItemHoverText: colors.primary.white,
    },

    typography: {
      ...headingScales,
      ...labelScales,
      ...contentScales,
      ...tableScales,
      ...formControlScales,
      ...navBarScales,
      ...buttonScales,
    },

    sizing,
    strokes: {
      storke2: `2px solid ${colors.shades.grey20}`
    },

    icons: {},
  },
};
