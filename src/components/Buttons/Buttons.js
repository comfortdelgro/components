import PropTypes from "prop-types";
import styled from "styled-components";

export const BUTTON_TYPES = {
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
    let style = `${theme.typography.btnLarge};`;
    switch (iconPosition) {
      case BUTTON_ICON_POSITIONS.right:
        style += 'padding: 12px 107px 12px 105px;';
        break;
      case BUTTON_ICON_POSITIONS.left:
          style += 'padding: 12px 105px 12px 107px;';
          break;
      default:
        style += 'padding: 12px 117px;';
        break;
    }
    return style;
  },
  sm: ({ iconPosition, theme }) => {
    let style = `${theme.typography.btnSm};`;
    switch (iconPosition) {
      case BUTTON_ICON_POSITIONS.right:
        style += 'padding: 12px 14px 12px 20px;';
        break;
      case BUTTON_ICON_POSITIONS.left:
          style += 'padding: 12px 20px 12px 22px;';
          break;
      default:
        style += 'padding: 12px 20px;';
        break;
    }
    return style;
  },
  xm: ({ theme }) => `
    ${theme.typography.btnXm}
    padding: 8px 14px;
  `,
  primary: ({theme}) => {
    return `
    color: ${theme.colors.buttonPrimaryText};
    background-color: ${theme.colors.buttonPrimaryFill};
    &:active,
    &:hover {
      background-color: ${theme.colors.buttonPrimaryHover};
    }
  `
  },
  secondary: ({theme}) => `
    color: ${theme.colors.buttonSecondaryText};
    background-color: ${theme.colors.buttonSecondaryFill};
    border: 1px solid ${theme.colors.buttonSecondaryBorder};
    &:active,
    &:hover {
      color: ${theme.colors.buttonSecondaryHoverText};
      border-color: ${theme.colors.buttonSecondaryHoverBorder};
      background-color: ${theme.colors.buttonSecondaryHoverFill};
    }
  `,
  negative: ({theme}) => `
    color: ${theme.colors.buttonNegativeText};
    background-color: ${theme.colors.buttonNegativeFill};
    border: 1px solid ${theme.colors.buttonNegativeBorder};
    &:active,
    &:hover {
      background-color: ${theme.colors.buttonNegativeHoverFill};
    }
  `,
  tertiary: ({theme}) => `
    color: ${theme.colors.buttonTertiaryText};
    background-color: ${theme.colors.buttonTertiaryFill};
    border: 1px solid ${theme.colors.buttonTertiaryBorder};
    &:active,
    &:hover {
      background-color: ${theme.colors.buttonTertiaryHoverFill};
    }
  `,
};

export const Button = styled.button`
  padding: 8px 12px;
  border-radius: 7px;
  min-width: 100px;
  cursor: pointer;
  transition: background-color 0.2s linear, color 0.2s linear;
  border: unset;
  user-select: none;

  // Rendering button styles by props
  ${ props => 
    BUTTON_MODIFIERS[BUTTON_TYPES[props.type]](props)
    +
    BUTTON_MODIFIERS[BUTTON_SIZES[props.size]](props)
  }

  &:disabled {
    background-color: ${({theme}) => theme.colors.buttonDisabledFill};
    color: ${({theme}) => theme.colors.buttonDisabledText};
    cursor: not-allowed;
    border: unset;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
  iconPosition: PropTypes.oneOf(Object.values(BUTTON_ICON_POSITIONS)),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: BUTTON_TYPES.primary,
  size: BUTTON_SIZES.large,
  onClick: () => {},
}
