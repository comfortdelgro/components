import {Badge as BuiBadge} from 'baseui/badge'
import * as React from 'react'
import {capitalize} from '../../utils/helpers/helpers'
import {padding} from '../../utils/helpers/style'

export enum KIND {
  default = 'default',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
}

export enum VARIATION {
  alert = 'alert',
  pill = 'pill',
}

export interface Props {
  kind?: KIND
  variation?: VARIATION
  content: React.ReactNode
}

export const Badge: React.FC<Props> = ({
  kind = KIND.default,
  variation = VARIATION.alert,
  ...delegated
}) => (
  <BuiBadge
    overrides={{
      Badge: {
        style: ({$theme}) => {
          const _kind = capitalize(kind)
          const style = {
            backgroundColor: $theme.colors[`badge${_kind}Fill`],
            color: $theme.colors[`badge${_kind}Text`],
          }
          switch (variation) {
            case VARIATION.alert:
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
            case VARIATION.pill:
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
