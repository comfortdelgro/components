import { resolveComponent, resolveProps, resolveStyle } from "../override";
import { padding } from "../../utils/helpers/style";

const override = ({
    Root,
    AppName,
    MainMenuItem,
    PrimaryMenuContainer,
    ProfileTileContainer,
    SecondaryMenuContainer,
    Spacing,
    SubnavContainer,
    UserMenuProfileListItem,
    UserProfileInfoContainer,
    UserProfilePictureContainer,
    UserProfileTileContainer,
}) => {

  let bgColor = undefined;
  let contentColor = undefined;

  return {
    Root: {
      style: (props) => ({
        backgroundColor: props.$theme.colors.primary,
        color: props.$theme.colors.primaryB,
        ...padding("16px 48px 16px 16px"),
        ...resolveStyle(Root, props)
      }),
      props: resolveProps({}, Root),
      ...resolveComponent(Root),
    },
    AppName: {
      style: (props) => ({
        color: props.$theme.colors.primaryB,
        ...props.$theme.typography.appName,
        ...resolveStyle(AppName, props),
      }),
      props: resolveProps({}, AppName),
      ...resolveComponent(AppName),
    },
    MainMenuItem: {
      style: (props) => ({
        color: props.$theme.colors.primaryB,
        ...props.$theme.typography.navMenuItem,
        ...resolveStyle(MainMenuItem, props)
      }),
      props: resolveProps({}, MainMenuItem),
      ...resolveComponent(MainMenuItem),
    },
    PrimaryMenuContainer: {
      style: (props) => resolveStyle(PrimaryMenuContainer, props),
      props: resolveProps({}, PrimaryMenuContainer),
      ...resolveComponent(PrimaryMenuContainer),
    },
    ProfileTileContainer: {
      style: (props) => resolveStyle(ProfileTileContainer, props),
      props: resolveProps({}, ProfileTileContainer),
      ...resolveComponent(ProfileTileContainer),
    },
    SecondaryMenuContainer: {
      style: (props) => resolveStyle(SecondaryMenuContainer, props),
      props: resolveProps({}, SecondaryMenuContainer),
      ...resolveComponent(SecondaryMenuContainer),
    },
    Spacing: {
      style: (props) => resolveStyle(Spacing, props),
      props: resolveProps({}, Spacing),
      ...resolveComponent(Spacing),
    },
    SubnavContainer: {
      style: (props) => resolveStyle(SubnavContainer, props),
      props: resolveProps({}, SubnavContainer),
      ...resolveComponent(SubnavContainer),
    },
    UserMenuProfileListItem: {
      style: (props) => resolveStyle(UserMenuProfileListItem, props),
      props: resolveProps({}, UserMenuProfileListItem),
      ...resolveComponent(UserMenuProfileListItem),
    },
    UserProfileInfoContainer: {
      style: (props) => resolveStyle(UserProfileInfoContainer, props),
      props: resolveProps({}, UserProfileInfoContainer),
      ...resolveComponent(UserProfileInfoContainer),
    },
    UserProfilePictureContainer: {
      style: (props) => resolveStyle(UserProfilePictureContainer, props),
      props: resolveProps({}, UserProfilePictureContainer),
      ...resolveComponent(UserProfilePictureContainer),
    },
    UserProfileTileContainer: {
      style: (props) => resolveStyle(UserProfileTileContainer, props),
      props: resolveProps({}, UserProfileTileContainer),
      ...resolveComponent(UserProfileTileContainer),
    },
  }
};

export default override;
