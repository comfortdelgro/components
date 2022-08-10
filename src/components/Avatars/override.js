import { resolveComponent, resolveProps, resolveStyle } from "../override";
import { SIZES } from "./Avatar";
import { borderRadius, padding } from "../../utils/helpers/style";

function resovleAvatarTypoScale(size, theme) {
  console.debug('resovleAvatarTypoScale', size);
  switch (size) {
    case SIZES.lg:
      return theme.typography.avatarLg;
    case SIZES.sm:
      return theme.typography.avatarSm;
    case SIZES.xs:
      return theme.typography.avatarXs;
    default:
      return theme.typography.avatarMd;
  }
};

const override = ({ 
  Avatar,
  Root,
  Initials,
}) => ({
  Avatar: {
    style: (props) => ({
      ...resolveStyle(Avatar, props),
    }),
    props: resolveProps({}, Avatar),
    ...resolveComponent(Avatar),
  },
  Root: {
    style: (props) => ({
      ...resolveStyle(Root, props),
    }),
    props: resolveProps({}, Root),
    ...resolveComponent(Root),
  },
  Initials: {
    style: (props) => ({
      // TODO:: fix baseweb err and apply typo
      ...resolveStyle(Initials, props),
    }),
    props: resolveProps({}, Initials),
    ...resolveComponent(Initials),
  },
});
export default override;