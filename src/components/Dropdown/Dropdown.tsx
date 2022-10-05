import {Select as BuiSelect, SelectProps as BuiSelectProps} from 'baseui/select'
import * as React from 'react'

export interface Props extends BuiSelectProps {}

export const Dropdown: React.FC<Props> = ({...delegated}) => {
  return <BuiSelect {...delegated} />
}
