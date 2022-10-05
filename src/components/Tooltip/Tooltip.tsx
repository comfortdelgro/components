import type {Theme as BuiTheme} from 'baseui'
import {useStyletron} from 'baseui'
import {Block} from 'baseui/block'
import {Delete} from 'baseui/icon'
import {
  StatefulTooltip,
  StatefulTooltipProps,
  TRIGGER_TYPE,
} from 'baseui/tooltip'
import * as React from 'react'
import {defaultTheme} from '../../utils'
import {padding} from '../../utils/helpers/style'
import {Button, ButtonKind} from '../Button'

type Theme = BuiTheme & typeof defaultTheme['overrides']

export enum BgColor {
  Blue = 'primary',
  Black = 'primaryA',
  White = 'primaryB',
}

interface TooltipContentProps {
  bgColor: BgColor
  body?: string
  cancel?: string
  confirm?: string
  onCancel?: React.MouseEventHandler
  onConfirm?: React.MouseEventHandler
  onForceClose?: React.MouseEventHandler
  title?: string
}

const TooltipContent: React.FC<TooltipContentProps> = ({
  bgColor,
  body,
  cancel,
  confirm,
  onCancel,
  onConfirm,
  onForceClose,
  title,
}) => {
  const [, theme] = useStyletron()
  const _theme = theme as Theme
  let btnCancelKind = undefined
  let btnCancelColor = undefined
  let btnConfirmKind = undefined
  switch (bgColor) {
    case BgColor.White:
      btnCancelKind = ButtonKind.Tertiary
      btnConfirmKind = ButtonKind.Primary
      btnCancelColor = _theme.colors.tooltipWhiteCancelText
      break
    default:
      btnCancelKind = ButtonKind.Tertiary
      btnConfirmKind = ButtonKind.Secondary
      btnCancelColor = _theme.colors.tooltipDefaultCancelText
      break
  }
  console.log('btnCancelColor', btnCancelColor)
  return (
    <Block>
      <Block
        font='tooltipTitle'
        marginBottom='16px'
        display='flex'
        justifyContent='space-between'
      >
        {title}
        <div onClick={onForceClose}>
          <Delete
            size={32}
            overrides={{
              Svg: {
                style: {cursor: 'pointer'},
              },
            }}
          />
        </div>
      </Block>
      <Block font='tooltipBody' marginBottom='16px'>
        {body}
      </Block>
      <Block
        overrides={{
          Block: {
            style: {
              width: '100%',
              display: 'inline-flex',
              flexWrap: 'wrap',
              justifyContent: 'stretch',
              gap: '16px',
              marginBottom: '16px',
            },
          },
        }}
      >
        <Button color={btnCancelColor} onClick={onCancel} kind={btnCancelKind}>
          {cancel}
        </Button>
        <Button onClick={onConfirm} kind={btnConfirmKind}>
          {confirm}
        </Button>
      </Block>
    </Block>
  )
}

export interface Props extends StatefulTooltipProps, TooltipContentProps {
  width?: string
}

export const Tooltip: React.FC<Props> = ({
  width = '372px',
  bgColor,
  content,
  title,
  body,
  cancel,
  confirm,
  onCancel,
  onForceClose,
  onConfirm,
  ...delegated
}) => {
  const _content = content ? (
    content
  ) : (
    <TooltipContent
      bgColor={bgColor}
      title={title}
      body={body}
      cancel={cancel}
      confirm={confirm}
      onCancel={onCancel}
      onForceClose={onForceClose}
      onConfirm={onConfirm}
    />
  )
  return (
    <StatefulTooltip
      content={_content}
      triggerType={TRIGGER_TYPE.click}
      overrides={{
        Body: {
          style: ({$theme}) => ({
            maxWidth: width,
            backgroundColor: $theme.colors[bgColor],
          }),
        },
        Inner: {
          style: ({$theme}) => {
            let color = ''
            switch (bgColor) {
              case BgColor.White:
                color = $theme.colors.primaryA
                break
              default:
                color = $theme.colors.primaryB
                break
            }
            return {
              color,
              backgroundColor: 'transparent',
              ...padding('16px 16px 0 16px'),
            }
          },
        },
        Arrow: {
          style: ({$theme}) => ({
            boxShadow: 'unset',
            backgroundColor: $theme.colors[bgColor],
          }),
        },
      }}
      {...delegated}
    />
  )
}
