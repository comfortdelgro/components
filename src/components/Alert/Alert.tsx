import {Banner, PropsT} from 'baseui/banner'
import * as React from 'react'
import {capitalize} from '../../utils/helpers/helpers'

export enum VARIATION {
  default = 'default',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
}

export interface Props extends PropsT {
  variation: VARIATION
}

export const Alert: React.FC<Props> = ({variation, ...delegated}) => (
  <Banner
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
