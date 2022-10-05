import {Input as BuiInput, InputProps as BuiInputProps} from 'baseui/input'
import {useStyletron} from 'baseui/styles'
import type {Theme as BuiTheme} from 'baseui/theme'
import * as React from 'react'
import {defaultTheme} from '../../utils'
import {
  borderRadius,
  borderWithoutColors,
  padding,
} from '../../utils/helpers/style'

type Theme = BuiTheme & typeof defaultTheme['overrides']

export interface Props extends BuiInputProps {
  startEnhancer?: BuiInputProps['startEnhancer']
  endEnhancer?: BuiInputProps['endEnhancer']
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
        // @ts-ignore
        <StartEnhancer
          size={(theme as Theme).sizing.inputEnhancer}
          color={(theme as Theme).colors.inputStartEnhancer}
        />
      }
      endEnhancer={
        // @ts-ignore
        <EndEnhancer
          size={(theme as Theme).sizing.inputEnhancer}
          color={(theme as Theme).colors.inputStartEnhancer}
        />
      }
      {...delegated}
    />
  )
}
