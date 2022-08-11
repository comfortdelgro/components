import {
  DIVIDER,
  Table as BuiTable,
  TableBuilder as BuiTableBuilder,
  TableBuilderColumn as BuiTableBuilderColumn,
  TableBuilderColumnProps,
} from 'baseui/table-semantic'
import * as React from 'react'
import {border, borderRadius} from '../../utils/helpers/style'

export type Props = BuiTable['props']

export const Table: React.FC<Props> = ({...delegated}) => {
  return (
    <BuiTable
      divider={DIVIDER.horizontal}
      overrides={{
        Root: {
          style: (props) => ({
            ...border('1px solid #E0E7ED'),
            ...borderRadius('16px'),
          }),
        },
      }}
      {...delegated}
    />
  )
}

export const TableBuilder: React.FC<Props> = ({...delegated}) => {
  return (
    <BuiTableBuilder
      divider={DIVIDER.horizontal}
      overrides={{
        Root: {
          style: (props) => ({
            ...border('1px solid #E0E7ED'),
            ...borderRadius('16px'),
          }),
        },
      }}
      {...delegated}
    />
  )
}

export const TableBuilderColumn: React.FC<TableBuilderColumnProps<unknown>> = (
  // todo: to refactor `unknown` here ---------------------------- ^
  props,
) => <BuiTableBuilderColumn {...props} />
