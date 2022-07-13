import { resolveComponent, resolveProps, resolveStyle } from "../override";
import { margin } from "../../utils/helpers/style";

const override = ({ Root, Separator, List, ListItem, Icon }) => ({
  Root: {
    style: (props) => ({
      ...resolveStyle(Root, props),
    }),
    props: resolveProps({}, Root),
    ...resolveComponent(Root),
  },
  Separator: {
    style: ({ $theme, $disabled, $error, ...restProps }) => ({
      ...resolveStyle(Separator, { $theme, $disabled, $error, ...restProps }),
    }),
    props: resolveProps({}, Separator),
    ...resolveComponent(Separator),
  },
  List: {
    style: ({ $theme, $disabled, $error, ...restProps }) => ({
      ...resolveStyle(List, { $theme, $disabled, $error, ...restProps }),
    }),
    props: resolveProps({}, List),
    ...resolveComponent(List),
  },
  ListItem: {
    style: ({ $theme, $disabled, $error, ...restProps }) => ({
      ...resolveStyle(ListItem, { $theme, $disabled, $error, ...restProps }),
    }),
    props: resolveProps({}, ListItem),
    ...resolveComponent(ListItem),
  },
  Icon: {
    style: ({ $theme, $disabled, $error, ...restProps }) => ({
      ...resolveStyle(Icon, { $theme, $disabled, $error, ...restProps }),
    }),
    props: resolveProps({}, Icon),
    component: Icon.component 
                ? resolveComponent(Icon)
                : () => { return "/" }
  },
});
export default override;