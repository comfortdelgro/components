import PropTypes from "prop-types";
import styled from "styled-components";

export const BUTTON_KINDS = {
  primary: 'primary',
  secondary: 'secondary',
  negative: 'negative',
  tertiary: 'tertiary',
};

export const BUTTON_SIZES = {
  large: 'large',
  sm: 'sm',
  xm: 'xm',
};

export const BUTTON_ICON_POSITIONS = {
  right: 'right',
  left: 'left',
};

export const BUTTON_MODIFIERS = {
  large: ({ iconPosition, theme }) => {
    const style = theme.typography.btnLarge;
    switch (iconPosition) {
      case BUTTON_ICON_POSITIONS.right:
        style.padding = "12px 107px 12px 105px";
        break;
      case BUTTON_ICON_POSITIONS.left:
        style.padding = "12px 105px 12px 107px";
        break;
      default:
        style.padding = "12px 117px";
        break;
    }
    return style;
  },
  sm: ({ iconPosition, theme }) => {
    const style = theme.typography.btnSm;
    switch (iconPosition) {
      case BUTTON_ICON_POSITIONS.right:
        style.padding = "12px 14px 12px 20px";
        break;
      case BUTTON_ICON_POSITIONS.left:
          style.padding = "12px 20px 12px 22px";
          break;
      default:
        style.padding = "12px 20px";
        break;
    }
    return style;
  },
  xm: ({ theme }) => ({
    ...theme.typography.btnXm,
    padding: "8px 14px",
  }),
  primary: ({ theme }) => {
    const activeStyle = {
      backgroundColor: theme.colors.buttonPrimaryHover,
    };
    return {
      color: theme.colors.buttonPrimaryText,
      backgroundColor: theme.colors.buttonPrimaryFill,
      "&:active": activeStyle,
      "&:hover" : activeStyle,
    };
  },
  secondary: ({theme}) => {
    const activeStyle = {
      color: theme.colors.buttonSecondaryHoverText,
      borderColor: theme.colors.buttonSecondaryHoverBorder,
      backgroundColor: theme.colors.buttonSecondaryHoverFill,
    };
    return {
      color: theme.colors.buttonSecondaryText,
      backgroundColor: theme.colors.buttonSecondaryFill,
      border: `1px solid ${theme.colors.buttonSecondaryBorder}`,
      "&:active": activeStyle,
      "&:hover": activeStyle, 
    };
  },
  negative: ({theme}) => {
    const activeStyle = {
      backgroundColor: theme.colors.buttonNegativeHoverFill,
    };
    return {
      color: theme.colors.buttonNegativeText,
      backgroundColor: theme.colors.buttonNegativeFill,
      border: `1px solid ${theme.colors.buttonNegativeBorder}`,
      "&:active": activeStyle,
      "&:hover": activeStyle,
    };
  },
  tertiary: ({theme}) => {
    const activeStyle = {
      backgroundColor: theme.colors.buttonTertiaryHoverFill,
    };
    return {
      color: theme.colors.buttonTertiaryText,
      backgroundColor: theme.colors.buttonTertiaryFill,
      border: `1px solid ${theme.colors.buttonTertiaryBorder}`,
      "&:active": activeStyle,
      "&:hover": activeStyle,
    }
  },
};

export const Button = styled.button( props => ({
  padding: "8px 12px",
  borderRadius: "7px",
  minWidth: "100px",
  cursor: "pointer",
  transition: "background-color 0.2s linear, color 0.2s linear",
  border: "unset",
  userSelect: "none",
  "&:disabled": {
    backgroundColor: props.theme.colors.buttonDisabledFill,
    color: props.theme.colors.buttonDisabledText,
    cursor: "not-allowed",
    border: "unset",
  },
  // Rendering button styles by props
  ...BUTTON_MODIFIERS[BUTTON_KINDS[props.kind]](props),
  ...BUTTON_MODIFIERS[BUTTON_SIZES[props.size]](props),
}));

Button.propTypes = {
  kind: PropTypes.oneOf(Object.values(BUTTON_KINDS)),
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
  iconPosition: PropTypes.oneOf(Object.values(BUTTON_ICON_POSITIONS)),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  kind: BUTTON_KINDS.primary,
  size: BUTTON_SIZES.sm,
  onClick: () => {},
}
