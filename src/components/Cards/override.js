import { resolveComponent, resolveProps, resolveStyle } from "../override";
import { borderRadius, padding } from "../../utils/helpers/style";

const override = ({ 
  Action,
  Body,
  Contents,
  HeaderImage,
  Root,
  Thumbnail,
  Title,
  Wrapper,
}) => ({
  Contents: {
    style: ({ $theme, $disabled, $error, ...restProps }) => ({
      ...padding("24px 16px 0 16px"),
      margin: 0,
      ...resolveStyle(Contents, { $theme, $disabled, $error, ...restProps }),
    }),
    props: resolveProps({}, Contents),
    ...resolveComponent(Contents),
  },
  Action: {
    marginBottom: "24px",
    style: ({ $theme, $disabled, $error, ...restProps }) => ({
      ...resolveStyle(Action, { $theme, $disabled, $error, ...restProps }),
    }),
    props: resolveProps({}, Action),
    ...resolveComponent(Action),
  },
  Body: {
    style: ({ $theme, $disabled, $error, ...restProps }) => ({
      marginBottom: "24px",
      ...resolveStyle(Body, { $theme, $disabled, $error, ...restProps }),
    }),
    props: resolveProps({}, Body),
    ...resolveComponent(Body),
  },
  HeaderImage: {
    style: ({ $theme, $disabled, $error, ...restProps }) => ({
      ...resolveStyle(HeaderImage, { $theme, $disabled, $error, ...restProps }),
    }),
    props: resolveProps({}, HeaderImage),
    ...resolveComponent(HeaderImage),
  },
  Root: {
    style: (props) => ({
      ...borderRadius("8px"),
      border: "unset",
      ...resolveStyle(Root, props),
    }),
    props: resolveProps({}, Root),
    ...resolveComponent(Root),
  },
  Thumbnail: {
    style: ({ $theme, $disabled, $error, ...restProps }) => ({
      ...resolveStyle(Thumbnail, { $theme, $disabled, $error, ...restProps }),
    }),
    props: resolveProps({}, Thumbnail),
    ...resolveComponent(Thumbnail),
  },
  Title: {
    style: ({ $theme, $disabled, $error, ...restProps }) => ({
      marginBottom: "8px",
      ...resolveStyle(Title, { $theme, $disabled, $error, ...restProps }),
    }),
    props: resolveProps({}, Title),
    ...resolveComponent(Title),
  },
  Wrapper: {
    style: ({ $theme, $disabled, $error, ...restProps }) => ({
      ...resolveStyle(Wrapper, { $theme, $disabled, $error, ...restProps }),
    }),
    props: resolveProps({}, Wrapper),
    ...resolveComponent(Wrapper),
  },
});
export default override;