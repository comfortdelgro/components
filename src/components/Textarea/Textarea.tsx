import {Textarea as BuiTextarea} from 'baseui/textarea'
import {padding} from 'polished'
import * as React from 'react'

export interface Props {
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
      // isFocused={isFocused} // todo: this property doesn't exist on BuiTextarea
      overrides={{
        // todo: root doesn't exist
        // Root: {
        //   style: (props) => {
        //     const borderWidth = props.$isFocused || props.$error ? 2 : 1
        //     return {
        //       ...borderWithoutColors(`${borderWidth}px solid`),
        //       ...borderRadius('8px'),
        //     }
        //   },
        // },
        Input: {
          style: (props) => {
            return {
              ...padding('12px 16px 12px 16px'),
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '20px',
              // color: props.$theme.colors.inputText,
            }
          },
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
