import PropTypes from "prop-types";
import styled from "styled-components";
import { buttonScales } from "../utils";

export const BUTTON_TYPES = {
  primary: 'primary',
  secondary: 'secondary',
  negative: 'negative',
};

export const BUTTON_SIZES = {
  large: 'large',
  small: 'small',
};

export const BUTTON_ICON_POSITIONS = {
  right: 'right',
  left: 'left',
};

export const BUTTON_MODIFIERS = {
  small: ({ iconPosition }) => {
    let style = 'font-weight: 500;';
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
  large: ({ iconPosition }) => {
    let style = 'font-weight: 700;';
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
  primary: ({theme}) => `
    color: ${theme.primaryColors.white};
    background-color: ${theme.primaryColors.blue};
    &:active,
    &:hover {
      background-color: ${theme.hoveredColors.button};
    }
  `,
  secondary: ({theme}) => `
    color: ${theme.secondaryColors.blue};
    background-color: ${theme.secondaryColors.white};
    border: 1px solid ${theme.secondaryColors.blue};
    &:active,
    &:hover {
      color: ${theme.hoveredColors.button};
      border-color: ${theme.hoveredColors.button};
    }
  `,
  negative: ({theme}) => `
    color: ${theme.secondaryColors.red};
    background-color: ${theme.secondaryColors.white};
    border: 1px solid ${theme.secondaryColors.red};
  `,
};

export const Button = styled.button`
  padding: 8px 12px;
  border-radius: 7px;
  min-width: 100px;
  cursor: pointer;
  ${buttonScales.primary};
  transition: background-color 0.2s linear, color 0.2s linear;
  border: unset;

  // Rendering button styles by props
  ${ props => 
    BUTTON_MODIFIERS[BUTTON_TYPES[props.type]](props)
    +
    BUTTON_MODIFIERS[BUTTON_SIZES[props.size]](props)
  }

  &:disabled {
    background-color: ${props => props.theme.disabledColors.button};
    color: ${props => props.theme.disabledColors.text};
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
