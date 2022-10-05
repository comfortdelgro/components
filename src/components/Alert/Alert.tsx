import type {Theme as BuiTheme} from 'baseui'
import {Banner, PropsT} from 'baseui/banner'
import * as React from 'react'
import {defaultTheme} from '../../utils'

export enum Variation {
  default = 'default',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
}

export interface Props extends PropsT {
  variation: Variation
}

type Theme = BuiTheme & typeof defaultTheme['overrides']

export const Alert: React.FC<Props> = ({variation, ...delegated}) => {
  const bg = {
    [Variation.default]: 'alertDefaultFill',
    [Variation.success]: 'alertSuccessFill',
    [Variation.warning]: 'alertWarningFill',
    [Variation.danger]: 'alertDangerFill',
  } as const

  return (
    <Banner
      overrides={{
        Root: {
          style: ({$theme}) => ({
            color: ($theme as Theme).colors.alertDefaultText,
            backgroundColor: ($theme as Theme).colors[bg[variation]],
          }),
        },
      }}
      {...delegated}
    />
  )
}
