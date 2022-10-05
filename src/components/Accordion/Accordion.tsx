import {Accordion as BuiAccordion, Panel as BuiPanel} from 'baseui/accordion'
import type {Theme as BuiTheme} from 'baseui/theme'
import * as React from 'react'
import {defaultTheme} from '../../utils'
import {padding} from '../../utils/helpers/style'

type Theme = BuiTheme & typeof defaultTheme['overrides']

export const Accordion = React.forwardRef<BuiAccordion>(
  ({children, ...delegated}, ref) => {
    return (
      <BuiAccordion
        ref={ref}
        overrides={{
          Header: {
            style: ({$theme}) => ({
              ...($theme as Theme).typography.accordionHeader,
              ...padding('24px 25px 24px 25px'),
            }),
          },
        }}
        {...delegated}
      >
        {children}
      </BuiAccordion>
    )
  },
)

export const Panel = React.forwardRef<BuiPanel>(({children, ...props}, ref) => {
  return (
    <BuiPanel ref={ref} {...props}>
      {children}
    </BuiPanel>
  )
})
