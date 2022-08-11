import type {Theme as BuiTheme} from 'baseui'
import {useStyletron} from 'baseui'
import {Icon} from 'baseui/icon'
import {Input as BuiInput} from 'baseui/input'
import * as React from 'react'
import {defaultTheme} from '../../utils'
import {
  borderRadius,
  borderWithoutColors,
  padding,
} from '../../utils/helpers/style'

type Theme = BuiTheme & typeof defaultTheme['overrides']

export interface Props {
  startEnhancer: typeof Icon
  endEnhancer: typeof Icon
}

export const Input: React.FC<Props> = ({
  startEnhancer: StartEnhancer = React.Fragment,
  endEnhancer: EndEnhancer = React.Fragment,
  ...delegated
}) => {
  const [, theme] = useStyletron()

  return (
    <BuiInput
      overrides={{
        Root: {
          style: () => ({
            ...borderWithoutColors('2px solid'),
            ...borderRadius('8px'),
          }),
        },
        Input: {
          style: (props) => ({
            ...padding('13px 16px 13px 16px'),
            color: (props.$theme as Theme).colors.inputText,
            ...(props.$theme as Theme).typography.input,
          }),
        },
      }}
      startEnhancer={
        <StartEnhancer
          size={(theme as Theme).sizing.inputEnhancer}
          color={(theme as Theme).colors.inputStartEnhancer}
        />
      }
      endEnhancer={
        <EndEnhancer
          size={(theme as Theme).sizing.inputEnhancer}
          color={(theme as Theme).colors.inputStartEnhancer}
        />
      }
      {...delegated}
    />
  )
}
