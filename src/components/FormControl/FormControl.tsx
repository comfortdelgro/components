import {
  FormControl as BuiFormControl,
  FormControlProps as BuiFormControlProps,
} from 'baseui/form-control'
import * as React from 'react'
import {margin} from '../../utils/helpers/style'

export interface Props extends BuiFormControlProps {}

export const FormControl: React.FC<Props> = ({children, ...delegated}) => {
  return (
    <BuiFormControl
      overrides={{
        Label: {
          style: (props) => ({
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '12px',
            lineHeight: '125%',
            marginBottom: '-4px',
            // color: props.$theme.secondaryColors.label,
          }),
        },
        Caption: {
          style: ({$theme, $disabled, $error}) => ({
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '12px',
            lineHeight: '18px',
            ...margin('4px 0 0 0'),
            // color: $disabled
            //         ? $theme.disabledColors.helper
            //         : ( $error ? $theme.secondaryColors.red : $theme.secondaryColors.helper),
          }),
        },
      }}
      {...delegated}
    >
      {children}
    </BuiFormControl>
  )
}
