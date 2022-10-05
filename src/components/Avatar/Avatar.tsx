import {Avatar as BuiAvatar, AvatarProps} from 'baseui/avatar'
import * as React from 'react'

export enum Size {
  Lg = 'lg',
  Md = 'md',
  Sm = 'sm',
  Xs = 'xs',
}

export const SIZES: Record<Size, string> = {
  [Size.Lg]: '40px',
  [Size.Md]: '32px',
  [Size.Sm]: '24px',
  [Size.Xs]: '16px',
}

export interface Props extends AvatarProps {
  name: string
  size: Size
}

export const Avatar: React.FC<Props> = ({size, ...delegated}) => (
  <BuiAvatar size={size} {...delegated} />
)
