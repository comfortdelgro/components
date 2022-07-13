import * as React from "react";
import PropTypes from "prop-types";
import {
  HeaderNavigation as BuiHeaderNavigation,
  StyledNavigationList as BuiStyledNavigationList,
  StyledNavigationItem as BuiStyledNavigationItem,
} from 'baseui/header-navigation';
import override from "./override";
import { withStyle } from "baseui";
import { ALIGN as BUI_ALIGN } from "baseui/header-navigation/constants";
import { Button } from "../Buttons";
import { Menu } from "baseui/icon";
import { StyledBlock } from "baseui/block/styled-components";
import styled from "styled-components";

export const StyledNavMenuButton = styled(Button)`
  ${({ theme }) => (`
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
  `)}
`;
StyledNavMenuButton.displayName = "StyledNavMenuButton";

export const HeaderNavBar = ({ overrides, ...restProps }) => {
  const _overrides = override(overrides);

  return (
    <BuiHeaderNavigation
      overrides={_overrides}
      {...restProps}
    />
  );
};
HeaderNavBar.displayName = "HeaderNavBar";
HeaderNavBar.defaultProps = {
  overrides: {
    Root: {}
  }
};

export const NavBarList = withStyle(BuiStyledNavigationList, ({ $theme }) =>({}));
export const NavBarListItem = withStyle(BuiStyledNavigationItem, ({ $theme }) =>({}));

const NavBarTitle = withStyle(
  StyledBlock,
  ({ $theme }) => ($theme.typography.navTitle)
);

export const HeaderNavBarMenuList = React.forwardRef(({
  $align,
  title,
  onMenuClick,
}, ref) => (
  <NavBarList $align={$align}>
    <NavBarListItem>
      <NavMenuButton onClick={(e) => onMenuClick(e)}/>
    </NavBarListItem>
    <NavBarListItem>
      <NavBarTitle>{title}</NavBarTitle>
    </NavBarListItem>
  </NavBarList>
));

export const NavMenuButton = React.forwardRef((props, ref) => (
  <StyledNavMenuButton
    ref={ref}
    {...props}>
    <Menu size="24"/>
  </StyledNavMenuButton>
));
NavMenuButton.displayName = "NavMenuButton";

// Constants
export const ALIGN = BUI_ALIGN;