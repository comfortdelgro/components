import type {Theme as BuiTheme} from 'baseui'
import {withStyle} from 'baseui'
// @ts-ignore
import {StyledBlock} from 'baseui/block/styled-components'
import {
  ALIGN as BUI_ALIGN,
  HeaderNavigation as BuiHeaderNavigation,
  StyledNavigationItem as BuiStyledNavigationItem,
  StyledNavigationList as BuiStyledNavigationList,
} from 'baseui/header-navigation'
import {Menu} from 'baseui/icon'
import * as React from 'react'
import styled from 'styled-components'
import {defaultTheme} from '../../utils'
import {padding} from '../../utils/helpers/style'
import {Button, ButtonProps} from '../Button'

type Theme = BuiTheme & typeof defaultTheme['overrides']

export const StyledNavMenuButton = styled(Button)`
  ${({theme}) => `
    padding: 0;
    width: 24px;
    max-width: 24px;
    min-width: 24px;
    height: 24px;
    background-color: transparent;
    color: ${theme.colors.primaryB};
    &:hover {
      background-color: transparent;
      color: ${theme.colors.primaryB};
    }
    transition: 1s;
    svg {
      user-select: none;
      width: 100%;
      height: 100%;
    }
  `}
`
StyledNavMenuButton.displayName = 'StyledNavMenuButton'

export const HeaderNavBar = ({...restProps}) => {
  return (
    <BuiHeaderNavigation
      overrides={{
        Root: {
          style: (props) => ({
            height: '88px',
            backgroundColor: props.$theme.colors.primary,
            color: props.$theme.colors.primaryB,
            ...padding('16px 48px 16px 16px'),
          }),
        },
      }}
      {...restProps}
    />
  )
}

HeaderNavBar.displayName = 'HeaderNavBar'
HeaderNavBar.defaultProps = {
  overrides: {
    Root: {},
  },
}

export const NavBarList = withStyle(BuiStyledNavigationList, ({$theme}) => ({}))
export const NavBarListItem = withStyle(
  BuiStyledNavigationItem,
  ({$theme}) => ({}),
)

const NavBarTitle = withStyle(
  StyledBlock,
  ({$theme}) => ($theme as Theme).typography.navTitle,
)

export const NavMenuButton: React.FC<ButtonProps> = (props) => (
  <StyledNavMenuButton {...props}>
    <Menu size='24' />
  </StyledNavMenuButton>
)

NavMenuButton.displayName = 'NavMenuButton'

export interface HeaderNavBarMenuListProps {
  $align: typeof BUI_ALIGN
  title: string
  onMenuClick: React.MouseEventHandler<HTMLButtonElement> | (() => void)
}

export const HeaderNavBarMenuList: React.FC<HeaderNavBarMenuListProps> = ({
  $align,
  onMenuClick,
  title,
}) => (
  <NavBarList $align={$align}>
    <NavBarListItem>
      <NavMenuButton onClick={(e) => onMenuClick(e)} />
    </NavBarListItem>
    <NavBarListItem>
      <NavBarTitle>{title}</NavBarTitle>
    </NavBarListItem>
  </NavBarList>
)

// Constants
export const ALIGN = BUI_ALIGN
