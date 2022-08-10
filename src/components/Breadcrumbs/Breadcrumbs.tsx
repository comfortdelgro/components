import {Breadcrumbs as BuiBreadcrumbs} from 'baseui/breadcrumbs'
import * as React from 'react'

export interface Props {}

export const Breadcrumbs: React.FC<Props> = ({children}) => {
  return (
    <BuiBreadcrumbs
      overrides={{
        Icon: () => <>/</>,
      }}
    >
      {children}
    </BuiBreadcrumbs>
  )
}
