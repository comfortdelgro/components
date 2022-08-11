import {useStyletron, withStyle} from 'baseui'
import {StyledLink as BuiLink} from 'baseui/link'
import * as React from 'react'

export interface Props {
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
  const [, theme] = useStyletron()

  return (
    <StyledLink href={href} {...delegated}>
      {children}
    </StyledLink>
  )
}
