import { resolveComponent, resolveProps, resolveStyle } from "../override";
import { margin, padding } from "../../utils/helpers/style";

const override = ({ 
  Content,
  ContentAnimationContainer,
  Header,
  PanelContainer,
  Root,
  ToggleIcon
}) => ({
  Root: {
    style: (props) => ({
      ...resolveStyle(Root, props),
    }),
    props: resolveProps({}, Root),
    ...resolveComponent(Root),
  },
  Content: {
    style: ({ $theme, $disabled, $error, ...restProps }) => ({
      ...resolveStyle(Content, { $theme, $disabled, $error, ...restProps }),
    }),
    props: resolveProps({}, Content),
    ...resolveComponent(Content),
  },
  ContentAnimationContainer: {
    style: ({ $theme, $disabled, $error, ...restProps }) => ({
      ...resolveStyle(ContentAnimationContainer, { $theme, $disabled, $error, ...restProps }),
    }),
    props: resolveProps({}, ContentAnimationContainer),
    ...resolveComponent(ContentAnimationContainer),
  },
  Header: {
    style: ({ $theme, $disabled, $error, ...restProps }) => ({
      ...$theme.typography.accordionHeader,
      ...padding("24px 25px 24px 25px"),
      ...resolveStyle(Header, { $theme, $disabled, $error, ...restProps }),
    }),
    props: resolveProps({}, Header),
    ...resolveComponent(Header),
  },
  PanelContainer: {
    style: ({ $theme, $disabled, $error, ...restProps }) => ({
      ...resolveStyle(PanelContainer, { $theme, $disabled, $error, ...restProps }),
    }),
    props: resolveProps({}, PanelContainer),
    ...resolveComponent(PanelContainer),
  },
  ToggleIcon: {
    style: ({ $theme, $disabled, $error, ...restProps }) => ({
      ...resolveStyle(ToggleIcon, { $theme, $disabled, $error, ...restProps }),
    }),
    props: resolveProps({}, ToggleIcon),
    // component: (props) => {
    //   console.debug("ToggleIconPorps", props);
    // }
    ...resolveComponent(ToggleIcon),
  },
});
export default override;