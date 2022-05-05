import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { buttonScales } from "../utils";

export const BUTTON_MODIFIERS = {
  small: () => `
    padding: 10px 16px;
    font-weight: 500;
  `,
  large: () => `
    padding: 16px 125px;
    font-weight: 700;
  `,
  primary: ({theme}) => `
    color: ${theme.primaryColors.white};
    background-color: ${theme.primaryColors.cdgBlue80};
  `,
  secondary: ({theme}) => `
    color: ${theme.primaryColors.cdgBlue80};
    background-color: ${theme.secondaryColors.SecondaryButton};
  `,
  orange:  ({theme}) => `
    color: ${theme.primaryColors.white};
    background-color: ${theme.secondaryColors.orange};
  `,
  light: ({theme}) => `
    color: ${theme.primaryColors.cdgBlue80};
    background-color: ${theme.primaryColors.white};
    border: 2px solid ${theme.buttonOutline};
  `,
  lightSecondary: ({theme}) => `
    color: ${theme.primaryColors.cdgBlue80};
    background-color: ${theme.primaryColors.white};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
  `,
};

export const Button = styled.button`
  padding: 8px 12px;
  border-radius: 7px;
  min-width: 100px;
  cursor: pointer;
  ${buttonScales.primary};
  transition: background-color 0.2s linear, color 0.2s linear;
  color: ${props => props.theme.primaryColors.grey100};
  border: unset;

  &:hover {
  }

  &:focus {
  }

  &:active {
  }

  &:disabled {
    background-color: ${props => props.theme.disabled};
    color: ${props => props.theme.textOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

/**
 * TODO:: remo them if modifiers are stable
 * NOTE:: Codes before refactoring with modifiers
 */
// export const PrimaryButton = styled(Button)`
//   background-color: ${props => props.theme.primaryColors.cdgBlue80};
//   border: unset;

//   &:disabled {
//     background-color: ${props => props.theme.disabled};
//     color: ${props => props.theme.textOnDisabled};
//     cursor: not-allowed;
//   }
//   ${applyStyleModifiers(BUTTON_MODIFIERS)};
// `;

// export const SecondaryButton = styled(Button)`
//   color: ${props => props.theme.primaryColors.cdgBlue80};
//   background-color: ${props => props.theme.secondaryColors.SecondaryButton};
//   border: unset;

//   &:disabled {
//     background-color: ${props => props.theme.disabled};
//     color: ${props => props.theme.textOnDisabled};
//     cursor: not-allowed;
//   }
//   ${applyStyleModifiers(BUTTON_MODIFIERS)};
// `;
