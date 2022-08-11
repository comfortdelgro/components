import type {Theme as BuiTheme} from 'baseui'
import React from 'react'
import styled, {css} from 'styled-components'
import {defaultTheme} from '../../utils'

// TODO: refactor default props declaration
// TODO: centralized types declaration pattern for all components

type Theme = BuiTheme & typeof defaultTheme['overrides']

export enum RadioKind {
  Primary = 'primary',
}

export interface RadioProps {
  type?: RadioKind
  onChange?: () => void
  labelText?: string
  name?: string
  size?: string
  disabled?: boolean
  checked?: boolean
}

const RadioWrapper = styled.div<RadioProps & {theme: Theme}>`
  margin: 5px;
  cursor: pointer;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  position: relative;
  label {
    margin-left: calc(${(props) => props.size} + 6px);
    white-space: nowrap;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 14px;
    line-height: ${(props) => props.size};
  }

  ${({checked, theme}) => {
    if (!checked) {
      return css`
        &:hover {
          &::before {
            border-color: ${theme.colors.radioButtonBorderHovered};
            background: ${theme.colors.radioButtonFillHovered};
          }
        }
      `
    }
  }}
  &::before {
    content: '';
    border-radius: 100%;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 0;
    // Solving Modifiers
    ${({checked, disabled, theme}) => {
      const borderStyle = `2px solid`
      if (disabled) {
        return `
          border: ${borderStyle} ${theme.colors.radioButtonBorderDisabled};
          background: ${theme.colors.radioButtonFillDisabled}
        `
      } else if (checked) {
        return `
          border: ${borderStyle} ${theme.colors.radioButtonBorderSelected};
          background: ${theme.colors.radioButtonFillSelected};
        `
      } else {
        return `
          border: ${borderStyle} ${theme.colors.radioButtonBorder};
          background: ${theme.colors.radioButtonFill};
        `
      }
    }}
  }
`

const Fill = styled.div<RadioProps & {theme: Theme}>`
  background: ${({theme}) => theme.colors.radioButtonMarkFill};
  width: 0;
  height: 0;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease-in, height 0.2s ease-in;
  pointer-events: none;
  z-index: 1;

  &::before {
    content: '';
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
  }
`

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
    & ~ ${Fill} {
      width: calc(100% - 58%);
      height: calc(100% - 58%);
      transition: width 0.2s ease-out, height 0.2s ease-out;
    }
  }
`

export const Radio: React.FC<RadioProps> = ({
  name = '',
  type = RadioKind.Primary,
  size = '24px',
  labelText = '',
  onChange = () => {},
  checked = false,
  disabled = false,
}) => {
  return (
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
