import type {Theme as BuiTheme} from 'baseui'
import {styled} from 'baseui'
import * as React from 'react'
import {StyleObject} from 'styletron-react'
import {defaultTheme} from '../../utils'

type Theme = BuiTheme & typeof defaultTheme['overrides']

export enum ButtonKind {
  Primary = 'primary',
  Secondary = 'secondary',
  Negative = 'negative',
  Tertiary = 'tertiary',
}

export enum ButtonSize {
  Large = 'large',
  Sm = 'sm',
  Xs = 'xs',
}

export enum ButtonIconPosition {
  Right = 'right',
  Left = 'left',
}

export interface Props {
  color?: string
  kind?: ButtonKind
  size?: ButtonSize
  iconPosition?: ButtonIconPosition
  onClick?: React.MouseEventHandler<HTMLButtonElement> | (() => void)
  children?: React.ReactNode
}

type ButtonModifiers = {
  [key in ButtonKind | ButtonSize]: (
    props: Props & {$theme: Theme},
  ) => StyleObject
}

export const BUTTON_MODIFIERS: ButtonModifiers = {
  large: ({iconPosition, $theme}) => {
    const style = {...$theme.typography.btnLarge}
    switch (iconPosition) {
      case ButtonIconPosition.Right:
        style.padding = '12px 107px 12px 105px'
        break
      case ButtonIconPosition.Left:
        style.padding = '12px 105px 12px 107px'
        break
      default:
        style.padding = '12px 117px'
        break
    }
    return style
  },
  sm: ({iconPosition, $theme}) => {
    const style = {...$theme.typography.btnSm}
    switch (iconPosition) {
      case ButtonIconPosition.Right:
        style.padding = '12px 14px 12px 20px'
        break
      case ButtonIconPosition.Left:
        style.padding = '12px 20px 12px 22px'
        break
      default:
        style.padding = '12px 20px'
        break
    }
    return style
  },
  xs: ({$theme}) => ({
    ...$theme.typography.btnXs,
    padding: '8px 14px',
  }),
  primary: ({$theme, color}) => {
    const activeStyle = {
      backgroundColor: $theme.colors.buttonPrimaryHover,
    }
    return {
      color: color || $theme.colors.buttonPrimaryText,
      backgroundColor: $theme.colors.buttonPrimaryFill,
      '&:active': activeStyle,
      '&:hover': activeStyle,
    }
  },
  secondary: ({$theme, color}) => {
    const activeStyle = {
      color: color || $theme.colors.buttonSecondaryHoverText,
      borderColor: $theme.colors.buttonSecondaryHoverBorder,
      backgroundColor: $theme.colors.buttonSecondaryHoverFill,
    }
    return {
      color: color || $theme.colors.buttonSecondaryText,
      backgroundColor: $theme.colors.buttonSecondaryFill,
      border: `1px solid ${$theme.colors.buttonSecondaryBorder}`,
      '&:active': activeStyle,
      '&:hover': activeStyle,
    }
  },
  negative: ({$theme, color}) => {
    const activeStyle = {
      backgroundColor: $theme.colors.buttonNegativeHoverFill,
    }
    return {
      color: color || $theme.colors.buttonNegativeText,
      backgroundColor: $theme.colors.buttonNegativeFill,
      border: `1px solid ${$theme.colors.buttonNegativeBorder}`,
      '&:active': activeStyle,
      '&:hover': activeStyle,
    }
  },
  tertiary: ({$theme, color}) => {
    const activeStyle = {
      backgroundColor: $theme.colors.buttonTertiaryHoverFill,
    }
    return {
      color: color || $theme.colors.buttonTertiaryText,
      backgroundColor: $theme.colors.buttonTertiaryFill,
      border: `1px solid ${$theme.colors.buttonTertiaryBorder}`,
      '&:active': activeStyle,
      '&:hover': activeStyle,
    }
  },
}

const StyledButton = styled('button', (props): StyleObject => {
  const theme = props.$theme as Theme
  return {
    display: 'inline-flex',
    flexGrow: 1,
    justifyContent: 'center',
    padding: '8px 12px',
    borderRadius: '7px',
    minWidth: '100px',
    cursor: 'pointer',
    transition: 'background-color 0.2s linear, color 0.2s linear',
    border: 'unset',
    userSelect: 'none',
    '&:disabled': {
      color: theme.colors.buttonDisabledText,
      backgroundColor: theme.colors.buttonDisabledFill,
      cursor: 'not-allowed',
      border: 'unset',

      '&:hover': {
        color: theme.colors.buttonDisabledText,
        backgroundColor: theme.colors.buttonDisabledFill,
      },
    },
    // Rendering button styles by props
    ...(props.kind ? BUTTON_MODIFIERS[props.kind](props) : {}),
    ...(props.size ? BUTTON_MODIFIERS[props.size](props) : {}),
  }
})

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      color,
      kind = ButtonKind.Primary,
      size = ButtonSize.Sm,
      iconPosition = ButtonIconPosition.Left,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onClick = () => {},
      children,
      ...delegated
    },
    ref,
  ) => {
    return (
      <StyledButton
        ref={ref}
        color={color}
        kind={kind}
        size={size}
        iconPosition={iconPosition}
        onClick={onClick}
        {...delegated}
      >
        {children}
      </StyledButton>
    )
  },
)
