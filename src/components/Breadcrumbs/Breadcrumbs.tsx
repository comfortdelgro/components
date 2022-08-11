import {styled, withStyle} from 'baseui'
import {Breadcrumbs as BuiBreadcrumbs} from 'baseui/breadcrumbs'
import {StyledLink as BuiLink} from 'baseui/link'
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

export interface Props {}

export const Breadcrumbs: React.FC<Props> = ({children}) => {
  return (
    <BuiBreadcrumbs overrides={{Icon: DefaultIcon}}>{children}</BuiBreadcrumbs>
  )
}
