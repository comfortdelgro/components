import type {Theme as BuiTheme} from 'baseui'
import {styled as buiStyled} from 'baseui'
import React from 'react'
import styled from 'styled-components'
import {defaultTheme} from '../../utils'

// TODO: refactor default props declaration
// TODO: centralized types declaration pattern for all components

type Theme = BuiTheme & typeof defaultTheme['overrides']

export enum RadioKind {
  Primary = 'primary',
}

export interface Props {
  type?: RadioKind
  onChange?: () => void
  labelText?: string
  name?: string
  size?: string
  disabled?: boolean
  checked?: boolean
}

//@ts-ignore
const RadioWrapper = buiStyled('div', (_props) => {
  const props = _props as Props & {$theme: Theme}

  return {
    margin: '5px',
    cursor: 'pointer',
    width: props.size,
    height: props.size,
    position: 'relative',

    label: {
      marginLeft: `calc(${props.size} + 6px)`,
      whiteSpace: 'nowrap',
      fontFamily: 'Poppins',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: props.size,
    },

    ...(({checked, $theme}) => {
      if (!checked) {
        return {
          '&:hover': {
            '&::before': {
              borderColor: $theme.colors.radioButtonBorderHovered,
              background: $theme.colors.radioButtonFillHovered,
            },
          },
        }
      }
    })(props),

    '&::before': {
      content: '',
      borderRadius: '100%',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      boxSizing: 'border-box',
      pointerEvents: 'none',
      zIndex: 0,
      // Solving Modifiers
      ...(({checked, disabled, $theme}) => {
        const borderStyle = `2px solid`
        if (disabled) {
          return {
            border: `${borderStyle} ${$theme.colors.radioButtonBorderDisabled}`,
            background: $theme.colors.radioButtonFillDisabled,
          }
        } else if (checked) {
          return {
            border: `${borderStyle} ${$theme.colors.radioButtonBorderSelected}`,
            background: $theme.colors.radioButtonFillSelected,
          }
        } else {
          return {
            border: `${borderStyle} ${$theme.colors.radioButtonBorder}`,
            background: $theme.colors.radioButtonFill,
          }
        }
      })(props),
    },
  }
})

//@ts-ignore
const Fill = buiStyled('div', ({$theme}) => ({
  background: ($theme as Theme).colors.radioButtonMarkFill,
  width: 0,
  height: 0,
  borderRadius: '100%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  transition: 'width 0.2s ease-in, height 0.2s ease-in',
  pointerEvents: 'none',
  zIndex: 1,

  '&::before': {
    content: '',
    opacity: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '100%',
  },
}))

const RadioInput = styled.input`
  opacity: 0;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:checked {
    & ~ ${Fill as any} {
      width: calc(100% - 58%);
      height: calc(100% - 58%);
      transition: width 0.2s ease-out, height 0.2s ease-out;
    }
  }
`

export const Radio: React.FC<Props> = ({
  name = '',
  type = RadioKind.Primary,
  size = '24px',
  labelText = '',
  onChange = () => {},
  checked = false,
  disabled = false,
}) => {
  return (
    // @ts-ignore
    <RadioWrapper type={type} size={size} checked={checked} disabled={disabled}>
      <label>
        {labelText}
        <RadioInput
          type='radio'
          onChange={onChange}
          name={name}
          checked={checked}
          aria-checked={checked}
          disabled={disabled}
        />
        {/* @ts-ignore */}
        <Fill size={size} />
      </label>
    </RadioWrapper>
  )
}

export interface RadioGroupProps {
  Component?: React.ComponentType | keyof JSX.IntrinsicElements
  name?: string
  selectedValue?: boolean
  onClickRadioButton?: (value: boolean) => void
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  Component = 'div',
  name = '',
  selectedValue = '',
  onClickRadioButton = () => {},
  children,
  ...delegated
}) => {
  return (
    <Component name={name} role='radiogroup' {...delegated}>
      {React.Children.map<React.ReactNode, React.ReactNode>(
        children,
        (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              ...child.props,
              checked: selectedValue === child.props.value,
              onChange: () => onClickRadioButton(child.props.value),
              name,
            })
          }
          return null
        },
      )}
    </Component>
  )
}
