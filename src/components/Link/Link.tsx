import {LinkProps as BuiLinkProps, StyledLink as BuiLink} from 'baseui/link'
import {withStyle} from 'baseui/styles'
import * as React from 'react'

export interface Props extends BuiLinkProps {
  href: string
}

const StyledLink = withStyle(BuiLink, ({$theme}) => ({
  color: $theme.colors.linkActive,
  textDecoration: 'underline',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
}))

export const Link: React.FC<Props> = ({href, children, ...delegated}) => {
  return (
    <StyledLink href={href} {...delegated}>
      {children}
    </StyledLink>
  )
}
