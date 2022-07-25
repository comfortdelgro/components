import { HeaderNavigationProps, ALIGN as BUI_ALIGN } from "baseui/header-navigation";
import * as React from 'react';
import { StyletronComponent } from "styletron-react";
import { StyledComponent } from "styled-components";

export const StyledNavMenuButton: StyledComponent<"button", any, {}, never>;

export declare const HeaderNavBar: React.FC<HeaderNavigationProps>;

export declare const NavBarList: StyletronComponent<any, any>;
export declare const NavBarListItem: StyletronComponent<any, any>;

export declare const HeaderNavBarMenuList: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
export declare const NavMenuButton: React.ForwardRefExoticComponent<React.RefAttributes<any>>;

export declare const ALIGN: {
  right: 'flex-end';
  left: 'flex-start';
  center: 'center';
};