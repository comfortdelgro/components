/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';

import { Avatar } from 'baseui/avatar';
import { Block } from 'baseui/block';
import { Button } from 'baseui/button';
import { getOverrides, mergeOverrides } from 'baseui/helpers/overrides';
import { ChevronUp, ChevronRight, ChevronDown } from 'baseui/icon';
import { MenuAdapter, ListItemLabel, ARTWORK_SIZES } from 'baseui/list';
import { StatefulMenu, StyledList as BuiStyledList } from 'baseui/menu';
import { StatefulPopover, PLACEMENT, TRIGGER_TYPE } from 'baseui/popover';

import {
  StyledUserMenuButton,
  StyledUserMenuProfileListItem
} from 'baseui/app-nav-bar/styled-components';
import UserProfileTile from 'baseui/app-nav-bar/user-profile-tile';
import { defaultMapItemToNode } from 'baseui/app-nav-bar/utils';
import { borderRadius } from '../../utils/helpers/style';
import { useStyletron, withStyle } from 'baseui';
import { LabelSmall } from 'baseui/typography';

const MENU_ITEM_WIDTH = '275px';

// eslint-disable-next-line react/display-name
const UserMenuListItem = React.forwardRef((props, ref) => {
  const { item, mapItemToNode = defaultMapItemToNode } = props;
  // Replace with a user menu item renderer
  return (
    <MenuAdapter
      overrides={{
        Root: {
          style: ({$theme}) => ({
            ...( props.$isHighlighted ? {
              backgroundColor: $theme.colors.primary,
              color: `${$theme.colors.primaryB} !important`,
            } : {})
          })
        }
      }}
      endEnhancer={() => <ChevronRight size={24}/>}
      {...props}
      ref={ref}
      artwork={item.icon || null}
      artworkSize={ARTWORK_SIZES.LARGE}>
      <ListItemLabel 
        overrides={{
          LabelContent: {
            style: ({$theme}) => ({
              color: $theme.colors[ props.$isHighlighted ? "primaryB" : "contentPrimary" ],
            }),
          },
        }}>{mapItemToNode(item)}</ListItemLabel>
    </MenuAdapter>
  );
});

const UserInfoLabel = (props) => (
  <Block
    overrides={{
      Block: {
        style: ({ $theme }) => ({
          textAlign: $theme.direction === "rtl"
                      ? "right"
                      : "left",
        }),
      },
    }}
    {...props}/>
);

const UserInfoBlock = ({ username, usernameSubtitle }) => (
  <Block
    padding="0px 5px"
    display="inline-block">
    <UserInfoLabel font="Label2" color="primaryB">{ username }</UserInfoLabel>
    <UserInfoLabel font="Label3" color="contentTertiary">{ usernameSubtitle }</UserInfoLabel>
  </Block>
);

const StyledList = withStyle(BuiStyledList, ({$theme}) => ({
  ...borderRadius("8px"),
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.08)",
}));

StyledList.displayName = "StyledList";

const svgStyleOverride = ({ $theme }) => ({ paddingLeft: $theme.sizing.scale200 });

export default function UserMenuComponent(props) {
  // isOpen is used for displaying different arrow icons in open or closed state
  const [isOpen, setIsOpen] = React.useState(false);
  const { userItems = [], username, usernameSubtitle, userImgUrl, overrides = {} } = props;

  const [UserMenuProfileListItem, userMenuProfileListItemProps] = getOverrides(
    overrides.UserMenuProfileListItem,
    StyledUserMenuProfileListItem
  );

  const [UserMenuButton, userMenuButtonProps] = getOverrides(overrides.UserMenuButton, Button);
  userMenuButtonProps.overrides = mergeOverrides(
    { BaseButton: { component: StyledUserMenuButton } },
    userMenuButtonProps.overrides
  );

  const [UserMenu, userMenuProps] = getOverrides(overrides.UserMenu, StatefulMenu);
  userMenuProps.overrides = mergeOverrides(
    {
      List: {
        // eslint-disable-next-line react/display-name
        component: React.forwardRef(({ children, ...restProps }, ref) => (
          <StyledList ref={ref} {...restProps}>
            <UserMenuProfileListItem 

              {...userMenuProfileListItemProps}>
              {/* Replace with a renderer: renderUserProfileTile() */}
              <UserProfileTile
                username={props.username}
                usernameSubtitle={props.usernameSubtitle}
                userImgUrl={props.userImgUrl}
                overrides={overrides}
              />
            </UserMenuProfileListItem>
            {children}
          </StyledList>
        )),
        style: { width: MENU_ITEM_WIDTH },
      },
      // eslint-disable-next-line react/display-name
      ListItem: React.forwardRef((listItemProps, ref) => {
        return (
          <UserMenuListItem ref={ref} {...listItemProps} mapItemToNode={props.mapItemToNode} />
        );
      }),
    },
    userMenuProps.overrides
  );

  return (
    <StatefulPopover
      content={({ close }) => (
        <UserMenu
          items={userItems}
          onItemSelect={({ item }) => {
            props.onItemSelect(item);
            close();
          }}
          {...userMenuProps}
        />
      )}
      overrides={{
        Body: {
          style: ({ $theme} ) => ({
            ...borderRadius("8px"),
          }),
        },
        Inner: {
          style: ({ $theme} ) => ({
            ...borderRadius("8px"),
          }),
        },
      }}
      autoFocus={false}
      dismissOnEsc={true}
      dismissOnClickOutside={true}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      placement={PLACEMENT.bottomRight}
      popperOptions={{ modifiers: { flip: { enabled: false } } }}
      triggerType={TRIGGER_TYPE.click}
    >
      <UserMenuButton {...userMenuButtonProps}>
        <Avatar name={username || ''} src={userImgUrl} size={'32px'} />
        <UserInfoBlock
          username={username}
          usernameSubtitle={usernameSubtitle}/>
        {isOpen ? (
          <ChevronUp color='primaryB' size={28} overrides={{ Svg: { style: svgStyleOverride } }} />
        ) : (
          <ChevronDown color='primaryB' size={28} overrides={{ Svg: { style: svgStyleOverride } }} />
        )}
      </UserMenuButton>
    </StatefulPopover>
  );
}
