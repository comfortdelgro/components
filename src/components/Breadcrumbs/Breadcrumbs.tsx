import {
  Breadcrumbs as BuiBreadcrumbs,
  BreadcrumbsProps,
} from 'baseui/breadcrumbs'
import {StyledLink as BuiLink} from 'baseui/link'
import {styled, withStyle} from 'baseui/styles'
import * as React from 'react'

export const BreadcrumbsLink = withStyle(BuiLink, ({$theme}) => ({
  textDecoration: 'none',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
}))

export const BreadcrumbsItem = styled('div', ({$theme}) => ({
  color: $theme.colors.linkActive,
  textDecoration: 'none',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
}))

const DefaultIcon: React.FC = () => <>&gt;</>

export interface Props extends BreadcrumbsProps {}

export const Breadcrumbs: React.FC<Props> = ({children}) => {
  return (
    <BuiBreadcrumbs overrides={{Icon: DefaultIcon}}>{children}</BuiBreadcrumbs>
  )
}
