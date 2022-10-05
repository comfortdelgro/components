import {
  Textarea as BuiTextarea,
  TextareaProps as BuiTextareaProps,
} from 'baseui/textarea'
import * as React from 'react'
import {
  borderRadius,
  borderWithoutColors,
  padding,
} from '../../utils/helpers/style'

export interface Props extends BuiTextareaProps {
  value: string
  placeholder: string
  disabled: boolean
  error: boolean
  isFocused: boolean
  onChange: () => void
  onBlur: () => void
}

export const Textarea: React.FC<Props> = ({
  value = '',
  placeholder = '',
  disabled = false,
  error = false,
  isFocused = false,
  onChange = () => {},
  onBlur = () => {},
}) => {
  return (
    <BuiTextarea
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      disabled={disabled}
      error={error}
      overrides={{
        // @ts-ignore
        Root: {
          style: (props: Record<string, unknown>) => ({
            ...borderWithoutColors(`2px solid`),
            ...borderRadius('8px'),
          }),
        },
        Input: {
          style: (props) => ({
            ...padding('12px 16px 12px 16px'),
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '20px',
            // color: props.$theme.colors.inputText,
          }),
        },
        InputContainer: {
          style: (props) => ({
            height: '131px',
          }),
        },
      }}
    />
  )
}
