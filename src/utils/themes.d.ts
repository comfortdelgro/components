import { sizing } from "./sizing";
import { Theme } from "baseui";

export type defaultThemeT = Theme & {
    overrides: {
        colors: {
             primary: string;
             primaryA: string;
             primaryB: string;
            borderSelected: string;
            contentPrimary: string;
            contentSecondary: string;
            contentTertiary: string;
            buttonPrimaryFill: string;
            buttonPrimaryText: string;
            buttonPrimaryHover: string;
            buttonSecondaryFill: string;
            buttonSecondaryText: string;
            buttonSecondaryBorder: string;
            buttonSecondaryHoverFill: string;
            buttonSecondaryHoverText: string;
            buttonSecondaryHoverBorder: string;
            buttonNegativeFill: string;
            buttonNegativeText: string;
            buttonNegativeBorder: string;
            buttonNegativeHoverFill: string;
            buttonTertiaryFill: string;
            buttonTertiaryText: string;
            buttonTertiaryBorder: string;
            buttonTertiaryHoverFill: string;
            buttonDisabledFill: string;
            buttonDisabledText: string;
            inputBorder: string;
            inputBorderError: string;
            inputFill: string;
            inputFillActive: string;
            inputFillError: string;
            inputFillDisabled: string;
            inputText: string;
            inputTextDisabled: string;
            inputPlaceholder: string;
            inputStartEnhancer: string;
            linkText: string;
            linkHover: string;
            linkActive: string;
            linkVisited: string;
            tableHeadBackgroundColor: string;
            tableBodyCellText: string;
            tickFillSelected: string;
            tickFillSelectedHover: string;
            tickFillHover: string;
            tickBorder: string;
            tickBorderHover: string;
            tickBorderFocus: string;
            tickText: string;
            tickTextDisabled: string;
            radioButtonBorder: string;
            radioButtonBorderSelected: string;
            radioButtonBorderHovered: string;
            radioButtonFill: string;
            radioButtonFillSelected: string;
            radioButtonFillHovered: string;
            radioButtonBorderDisabled: string;
            radioButtonFillDisabled: string;
            radioButtonMarkFill: string;
            sideBarFill: string;
            sideBarItemHoverFill: string;
            sideBarItemText: string;
            sideBarItemHoverText: string;
        }
        typography: {
          avatarLg: {
            fontStyle: string;
            fontWeight: number | string;
            fontSize: string;
            lineHeight: string;
          }
          avatarMd: {
            fontStyle: string;
            fontWeight: number | string;
            fontSize: string;
            lineHeight: string;
          }
          avatarSm: {
            fontStyle: string;
            fontWeight: number | string;
            fontSize: string;
            lineHeight: string;
          }
          avatarXs: {
            fontStyle: string;
            fontWeight: number | string;
            fontSize: string;
            lineHeight: string;
          }
          accordionHeader: {
            fontStyle: string;
            fontWeight: number;
            fontSize: string;
            lineHeight: string;
          };
          btnLarge: {
              fontFamily: string;
              fontStyle: string;
              fontWeight: number;
              fontSize: string;
              lineHeight: string;
          };
          btnSm: {
              fontFamily: string;
              fontStyle: string;
              fontWeight: number;
              fontSize: string;
              lineHeight: string;
          };
          btnXm: {
              fontFamily: string;
              fontStyle: string;
              fontWeight: number;
              fontSize: string;
              lineHeight: string;
          };
          navTitle: {
              fontStyle: string;
              fontWeight: string;
              fontSize: string;
              lineHeight: string;
          };
          navMenuItem: {
              fontStyle: string;
              fontWeight: string;
              fontSize: string;
              lineHeight: string;
          };
          sideBarItem: {
              fontStyle: string;
              fontWeight: number;
              fontSize: string;
              lineHeight: string;
          };
          checkBoxLabel: {
              fontStyle: string;
              fontWeight: number;
              fontSize: string;
              lineHeight: string;
          };
          input: {
              fontStyle: string;
              fontWeight: string;
              fontSize: string;
              lineHeight: string;
          };
          tableHeadeCell: {
              fontStyle: string;
              fontWeight: number;
              fontSize: string;
              lineHeight: string;
          };
          font200: {
              fontStyle: string;
              fontWeight: number;
              fontSize: string;
              lineHeight: string;
          };
          Label1: {
              fontFamily: string;
              fontStyle: string;
              fontWeight: number;
              fontSize: string;
              lineHeight: string;
          };
          Label2: {
              fontFamily: string;
              fontStyle: string;
              fontWeight: number;
              fontSize: string;
              lineHeight: string;
          };
          Label3: {
              fontFamily: string;
              fontStyle: string;
              fontWeight: number;
              fontSize: string;
              lineHeight: string;
          };
          HeadingXSmall: {
              fontStyle: string;
              fontWeight: number;
              fontSize: string;
              lineHeight: string;
          };
          HeadingSmall: {
              fontStyle: string;
              fontWeight: number;
              fontSize: string;
              lineHeight: string;
          };
          HeadingMedium: {
              fontStyle: string;
              fontWeight: number;
              fontSize: string;
              lineHeight: string;
          };
          HeadingLarge: {
              fontStyle: string;
              fontWeight: number;
              fontSize: string;
              lineHeight: string;
          };
          HeadingXLarge: {
              fontStyle: string;
              fontWeight: number;
              fontSize: string;
              lineHeight: string;
          };
          HeadingXXLarge: {
              fontStyle: string;
              fontWeight: number;
              fontSize: string;
              lineHeight: string;
          };
          h600: {
              fontFamily: string;
              fontStyle: string;
              fontWeight: number;
              fontSize: string;
              lineHeight: string;
          };
        };
        sizing: sizing;
        strokes: {
            storke2: string;
        }
        icons: {};
    }
}

export const defaultTheme: defaultThemeT;