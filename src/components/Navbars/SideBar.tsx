import {Delete} from 'baseui/icon'
import type {Theme as BuiTheme} from 'baseui/theme'
import * as React from 'react'
import styled from 'styled-components'
import {defaultTheme} from '../../utils'
import {styleObjToStyleStr} from '../../utils/helpers/style'
import {Button} from '../Button'

type Theme = BuiTheme & typeof defaultTheme['overrides']

// Constants
export const LOGO_SIZE = 52
export const SIDE_BAR_ITEM_ICON_SIZE = 24
export const SIDE_BAR_WIDTH = '270px'
export const COLLAPSED_SIDE_BAR_WIDTH = '72px'

export const StyledLogo = styled.div<StyledSideBarProps>`
  ${({theme, isOpened}) => `
    position: absolute;
    top: 24.74px;
    left: 10px;
  `}
`
StyledLogo.displayName = 'StyledLogo'

export const StyledCloseButton = styled(Button)`
  ${({theme}) => `
    position: absolute;
    top: 22px;
    right: 7px;
    padding: 0;
    width: 58px;
    max-width: 58px;
    min-width: 58px;
    height: 58px;
    background-color: transparent;
    color: ${theme.colors.primaryA};
    transition: 1s;
    &:hover {
      background-color: transparent;
      color: ${theme.colors.primaryA};
    }
    svg {
      user-select: none;
      width: 100%;
      height: 100%;
    }
  `}
`
StyledCloseButton.displayName = 'StyledCloseButton'

export const StyledSideBarItem = styled(Button)`
  ${({
    theme,
    isActive = false,
    isOpened = false,
  }: {
    theme: Theme
    isActive: boolean
    isOpened: boolean
  }) => `
    padding: ${isOpened ? '10px 16px 10px 9px' : '8px'};
    margin-bottom: 24px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    min-width: 100%;
    text-align: left;
    ${styleObjToStyleStr(theme.typography.sideBarItem)}
    &:hover {
      background-color: ${theme.colors.sideBarItemHoverFill}
      color: ${theme.colors.sideBarItemHoverText}
    }
    ${
      isActive
        ? `
              background-color: ${theme.colors.sideBarItemHoverFill}
              color: ${theme.colors.sideBarItemHoverText}
            `
        : `
              background-color: transparent;
              color: ${theme.colors.sideBarItemText};
            `
    }
  `}
`

StyledSideBarItem.displayName = 'StyledSideBarItem'

export const StyledSideBarItemIcon = styled.span`
  display: flex;
  align-items: center;
`

StyledSideBarItemIcon.displayName = 'StyledSideBarItemIcon'

export const StyledSideBarItemContent = styled.span`
  margin-left: 18px;
`

StyledSideBarItemContent.displayName = 'StyledSideBarItemContent'

export interface StyledSideBarProps {
  isOpened?: boolean
}

export const StyledSideBar = styled.div<StyledSideBarProps>`
  ${({theme, isOpened = false}) => `
    height: 100vh;
    width: ${isOpened ? SIDE_BAR_WIDTH : COLLAPSED_SIDE_BAR_WIDTH};
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: ${theme.colors.sideBarFill};
    overflow-x: hidden;
    transition: 0.5s;
    padding: 158px 16px 0 16px;
    border-right: 2px solid #D6DDEB;
  `}
`

StyledSideBar.displayName = 'StyledSideBar'

const marginMain = (el: HTMLElement, sideBarWidth: string) => {
  el.style.marginLeft = sideBarWidth
}

export interface SideBarProps extends React.HTMLAttributes<HTMLDivElement> {
  collapsible?: boolean
  isOpened?: boolean
  logo?: React.ReactNode
  mainRef?: React.RefObject<HTMLElement>
  onClose?: () => void
  onHover?: React.MouseEventHandler<HTMLDivElement> | (() => void)
  children: React.ReactNode
}

export const SideBar = React.forwardRef<HTMLDivElement, SideBarProps>(
  (
    {
      collapsible = false,
      isOpened = false,
      logo,
      mainRef = React.createRef(),
      onClose = () => {},
      onHover = () => {},
      children,
      ...restProps
    },
    ref,
  ) => {
    React.useEffect(() => {
      marginMain(
        mainRef.current!,
        isOpened ? SIDE_BAR_WIDTH : COLLAPSED_SIDE_BAR_WIDTH,
      )
    })

    return (
      <StyledSideBar
        ref={ref}
        isOpened={isOpened}
        onMouseEnter={(e) => onHover(e)}
        {...restProps}
      >
        {collapsible && isOpened && (
          <StyledCloseButton onClick={(e) => onClose()}>
            <Delete size={24} />
          </StyledCloseButton>
        )}
        <StyledLogo isOpened={isOpened}>{logo}</StyledLogo>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {isOpened} as any)
          }
          return null
        })}
      </StyledSideBar>
    )
  },
)

SideBar.displayName = 'SideBar'

export interface SideBarItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
  isOpened?: boolean
  icon?: React.ReactNode
  children?: React.ReactNode
}

export const SideBarItem = React.forwardRef<
  HTMLButtonElement,
  SideBarItemProps
>(({isActive = false, isOpened = false, icon, children, ...delegated}, ref) => {
  return (
    <StyledSideBarItem
      ref={ref}
      isActive={isActive}
      isOpened={isOpened}
      {...delegated}
    >
      <StyledSideBarItemIcon>{icon}</StyledSideBarItemIcon>
      {isOpened && (
        <StyledSideBarItemContent>{children}</StyledSideBarItemContent>
      )}
    </StyledSideBarItem>
  )
})

SideBarItem.displayName = 'SideBarItem'
