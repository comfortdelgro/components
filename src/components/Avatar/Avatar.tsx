import {Avatar as BuiAvatar} from 'baseui/avatar'
import * as React from 'react'

export enum AvatarSize {
  Lg = 'lg',
  Md = 'md',
  Sm = 'sm',
  Xs = 'xs',
}

export const SIZES: Record<AvatarSize, string> = {
  [AvatarSize.Lg]: '40px',
  [AvatarSize.Md]: '32px',
  [AvatarSize.Sm]: '24px',
  [AvatarSize.Xs]: '16px',
}

export interface Props {
  name: string
  size: AvatarSize
}

export const Avatar: React.FC<Props> = ({size, ...delegated}) => (
  <BuiAvatar size={size} {...delegated} />
)
