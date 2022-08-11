import {Select as BuiSelect} from 'baseui/select'
import * as React from 'react'

export interface Props {}

export const Dropdown: React.FC<Props> = ({...delegated}) => {
  return <BuiSelect {...delegated} />
}
