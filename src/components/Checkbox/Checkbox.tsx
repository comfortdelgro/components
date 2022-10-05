import {
  Checkbox as BuiCheckbox,
  CheckboxProps as BuiCheckboxProps,
  LABEL_PLACEMENT,
} from 'baseui/checkbox'
import * as React from 'react'
import {
  borderColors,
  borderRadius,
  borderWithoutColors,
} from '../../utils/helpers/style'

export interface Props extends BuiCheckboxProps {}

export const Checkbox: React.FC<Props> = ({children, ...delegated}) => {
  return (
    <BuiCheckbox
      labelPlacement={LABEL_PLACEMENT.right}
      overrides={{
        Checkmark: {
          style: (props) => ({
            width: '14px',
            height: '14px',
            ...borderWithoutColors('2px solid'),
            ...borderRadius('3px'),
            boxShadow: 'unset',
            ':focus': borderColors(props.$theme.colors.tickBorderFocus),
            ':hover':
              props.$checked || props.$disabled
                ? {}
                : borderColors(props.$theme.colors.tickBorderHover),
          }),
        },
        Label: {
          style: (props) => ({
            color: props.$theme.colors.tickText,
            ':disabled': {
              color: props.$theme.colors.tickText,
            },
            ...props.$theme.typography.checkBoxLabel,
          }),
        },
      }}
      {...delegated}
    >
      {children}
    </BuiCheckbox>
  )
}
