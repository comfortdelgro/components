import {useStyletron} from 'baseui'
import {Block} from 'baseui/block'
import * as React from 'react'
import {StyleObject} from 'styletron-react'
import {padding} from '../../utils/helpers/style'

export enum Color {
  blue = 'primayA',
  black = 'primaryB',
  white = 'primaryC',
}

export interface Props {
  color?: Color
}

export const Footer: React.FC<Props> = ({color = Color.blue, ...delegated}) => {
  const [, theme] = useStyletron()
  const style: StyleObject = {}
  style[theme.mediaQuery.large] = padding('32px 64px 32px 64px')
  style[theme.mediaQuery.medium] = padding('32px 48x 32px 48px')
  style[theme.mediaQuery.small] = padding('20px 16px 20px 16px')
  return <Block color={color} {...delegated} $style={style} />
}
