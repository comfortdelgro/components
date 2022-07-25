import * as React from "react";
import { StyledComponent } from "styled-components";

export declare const LOGO_SIZE: number;
export declare const SIDE_BAR_ITEM_ICON_SIZE: number;
export declare const SIDE_BAR_WIDTH: string;
export declare const COLLAPSED_SIDE_BAR_WIDTH: string;

export declare const StyledSideBar: StyledComponent<"div", any, {}, never>;
export declare const StyledLogo: StyledComponent<"div", any, {}, never>;
export declare const StyledCloseButton: StyledComponent<"button", any, {}, never>;
export declare const StyledSideBarItem: StyledComponent<"button", any, {}, never>;
export declare const StyledSideBarItemIcon: StyledComponent<"span", any, {}, never>;
export declare const StyledSideBarItemContent: StyledComponent<"span", any, {}, never>;

export declare const SideBar: React.FC<{
  collapsible?: boolean
  isOpened?: boolean
  logo?: React.ReactNode,
  children?: React.ReactNode,
  mainRef?: React.MutableRefObject<null>,
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => any,
  onHover?: (event: React.MouseEvent<HTMLDivElement>) => any,
} & React.HTMLAttributes<HTMLDivElement>>;
export declare const SideBarItem: React.FC<{
  isActive: boolean,
  isOpened: boolean,
  icon: React.ReactNode
  children: React.ReactNode
} & React.HTMLAttributes<HTMLButtonElement>>;