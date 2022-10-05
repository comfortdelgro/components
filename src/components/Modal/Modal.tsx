import {Modal as BuiModal, ModalProps as BuiModalProps} from 'baseui/modal'
import {styled} from 'baseui/styles'
import type {Theme as BuiTheme} from 'baseui/theme'
import * as React from 'react'
import {defaultTheme} from '../../utils'
import {Button} from '../Button'

type Theme = BuiTheme & typeof defaultTheme['overrides']

export const ModalHeader = styled('div', ({$theme: _theme}) => {
  const $theme = _theme as Theme

  const marginStartDir =
    $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft'
  const marginEndDir = $theme.direction === 'rtl' ? 'marginLeft' : 'marginRight'

  console.log($theme)

  return {
    ...$theme.typography.h600,
    color: $theme.colors.contentPrimary,
    marginTop: $theme.sizing.scale825,
    marginBottom: $theme.sizing.scale850,
    [marginStartDir]: $theme.sizing.scale825,
    // Slightly more margin than left side to leave room for close button
    [marginEndDir]: $theme.sizing.scale825,
  }
})

export const ModalBody = styled('div', ({$theme: _theme}) => {
  const $theme = _theme as Theme

  return {
    ...$theme.typography.font200,
    color: $theme.colors.contentSecondary,
    marginTop: $theme.sizing.noScale,
    marginLeft: $theme.sizing.scale825,
    marginRight: $theme.sizing.scale825,
    marginBottom: $theme.sizing.scale850,
  }
})

export const ModalFooter = styled('div', ({$theme: _theme}) => {
  const $theme = _theme as Theme

  return {
    ...$theme.typography.font200,
    marginTop: $theme.sizing.noScale,
    marginLeft: $theme.sizing.scale825,
    marginRight: $theme.sizing.scale825,
    marginBottom: $theme.sizing.scale825,
    textAlign: $theme.direction === 'rtl' ? 'left' : 'right',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '1rem',
  }
})

export const ModalButton = Button

export interface Props extends BuiModalProps {}

export const Modal: React.FC<Props> = ({children, ...delegated}) => {
  return <BuiModal {...delegated}>{children}</BuiModal>
}
