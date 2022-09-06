import {ListItem as BuiListItem, PropsT as ListItemPropsT} from 'baseui/list'
import * as React from 'react'
import {capitalize} from '../../utils/helpers/helpers'

export enum VARIATION {
  default = 'default',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
}

export interface ListItemProps extends ListItemPropsT {
  variation: VARIATION
}

export const ListItem: React.FC<ListItemProps> = ({
  variation,
  ...delegated
}) => (
  <BuiListItem
    overrides={{
      Root: {
        style: ({$theme}) => ({
          color: $theme.colors.alertDefaultText,
          backgroundColor: $theme.colors[`alert${capitalize(variation)}Fill`],
        }),
      },
    }}
    {...delegated}
  />
)
