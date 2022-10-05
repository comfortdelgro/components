import {Badge as BuiBadge, BadgePropsT} from 'baseui/badge'
import type {Theme as BuiTheme} from 'baseui/theme'
import * as React from 'react'
import {defaultTheme} from '../../utils'
import {padding} from '../../utils/helpers/style'

export enum Kind {
  default = 'default',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
}

export enum Variation {
  alert = 'alert',
  pill = 'pill',
}

export interface Props extends BadgePropsT {
  kind?: Kind
  variation?: Variation
  content: React.ReactNode
}

type Theme = BuiTheme & typeof defaultTheme['overrides']

export const Badge: React.FC<Props> = ({
  kind = Kind.default,
  variation = Variation.alert,
  ...delegated
}) => {
  const bg = {
    [Kind.default]: 'badgeDefaultFill',
    [Kind.success]: 'badgeSuccessFill',
    [Kind.warning]: 'badgeWarningFill',
    [Kind.danger]: 'badgeDangerFill',
  } as const

  const color = {
    [Kind.default]: 'badgeDefaultText',
    [Kind.success]: 'badgeSuccessText',
    [Kind.warning]: 'badgeWarningText',
    [Kind.danger]: 'badgeDangerText',
  } as const

  return (
    <BuiBadge
      overrides={{
        Badge: {
          style: ({$theme}) => {
            const style = {
              backgroundColor: ($theme as Theme).colors[bg[kind]],
              color: ($theme as Theme).colors[color[kind]],
            }
            switch (variation) {
              case Variation.alert:
                return {
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: '12px',
                  lineHeight: '18px',
                  display: 'inline-flex',
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  gap: '10px',
                  ...padding('0px 8px 0px 8px'),
                  ...style,
                }
              case Variation.pill:
                return {
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: '12px',
                  lineHeight: '18px',
                  display: 'inline-flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  ...padding('4px 24px 4px 24px'),
                  ...style,
                }
            }
            return {} // to satisfy TS
          },
        },
      }}
      {...delegated}
    />
  )
}
