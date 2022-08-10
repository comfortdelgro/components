import {StyledLink} from 'baseui/link'
import * as React from 'react'
import useStyler from './styles'

export interface Props {
  href: string
  isActive?: boolean // todo: un what?
}

export const Link: React.FC<Props> = ({
  href,
  isActive = false,
  children,
  ...delegated
}) => {
  const className = useStyler({isActive})

  return (
    <StyledLink href={href} className={className} {...delegated}>
      {children}
    </StyledLink>
  )
}
