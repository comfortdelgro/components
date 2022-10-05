import {
  Card as BuiCard,
  CardProps as BuiCardProps,
  StyledAction as BuiStyledAction,
  StyledBody as BuiStyledBody,
  StyledContents as BuiStyledContents,
  StyledHeaderImage as BuiStyledHeaderImage,
  StyledRoot as BuiStyledRoot,
  StyledThumbnail as BuiStyledThumbnail,
  StyledTitle as BuiStyledTitle,
  StyledWrapper as BuiStyledWrapper,
} from 'baseui/card'
import * as React from 'react'
import {borderRadius, padding} from '../../utils/helpers/style'

export interface Props extends BuiCardProps {}

export const Card: React.FC<Props> = ({children, ...delegated}) => (
  <BuiCard
    overrides={{
      Contents: {
        style: () => ({
          ...padding('24px 16px 0 16px'),
          margin: 0,
        }),
      },
      Action: {
        style: () => ({marginBottom: '24px'}),
      },
      Body: {
        style: () => ({marginBottom: '24px'}),
      },

      Root: {
        style: () => ({
          ...borderRadius('8px'),
          border: 'unset',
        }),
      },
      Title: {
        style: () => ({marginBottom: '8px'}),
      },
    }}
    {...delegated}
  >
    {children}
  </BuiCard>
)

export const StyledAction = BuiStyledAction
export const StyledBody = BuiStyledBody
export const StyledContents = BuiStyledContents
export const StyledHeaderImage = BuiStyledHeaderImage
export const StyledThumbnail = BuiStyledThumbnail
export const StyledTitle = BuiStyledTitle
export const StyledRoot = BuiStyledRoot
export const StyledWrapper = BuiStyledWrapper
