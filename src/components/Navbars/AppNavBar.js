import * as React from "react";
import PropTypes from "prop-types";
import {
  AppNavBar as BuiAppNavBar,
  setItemActive,
} from "baseui/app-nav-bar";
import override from "./override";

export const AppNavBar = ({ overrides, ...restProps }) => {
  const localOverrides = override(overrides);

  return (
    <BuiAppNavBar
      overrides={localOverrides}
      {...restProps}
    />
  );
};

export { setItemActive };

AppNavBar.propTypes = {
  overrides: PropTypes.shape({
    Root: PropTypes.object,
    AppName: PropTypes.object,
    MainMenuItem: PropTypes.object,
    PrimaryMenuContainer: PropTypes.object,
    ProfileTileContainer: PropTypes.object,
    SecondaryMenuContainer: PropTypes.object,
    Spacing: PropTypes.object,
    SubnavContainer: PropTypes.object,
    UserMenuProfileListItem: PropTypes.object,
    UserProfileInfoContainer: PropTypes.object,
    UserProfilePictureContainer: PropTypes.object,
    UserProfileTileContainer: PropTypes.object,
  }),
};

AppNavBar.defaultProps = {
  overrides: {
    Root: {},
    AppName: {},
    MainMenuItem: {},
    PrimaryMenuContainer: {},
    ProfileTileContainer: {},
    SecondaryMenuContainer: {},
    Spacing: {},
    SubnavContainer: {},
    UserMenuProfileListItem: {},
    UserProfileInfoContainer: {},
    UserProfilePictureContainer: {},
    UserProfileTileContainer: {},
  }
};