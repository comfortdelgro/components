import { resolveComponent, resolveProps, resolveStyle } from "../override";
import { margin } from "../../utils/helpers/style";

const override = ({ Root, Dialog, DialogContainer, Close }) => ({
  Root: {
    style: (props) => ({
      ...resolveStyle(Root, props),
    }),
    props: resolveProps({}, Root),
    ...resolveComponent(Root),
  },
  Dialog: {
    style: ({ $theme, $disabled, $error, ...restProps }) => ({
      ...resolveStyle(Dialog, { $theme, $disabled, $error, ...restProps }),
    }),
    props: resolveProps({}, Dialog),
    ...resolveComponent(Dialog),
  },
  DialogContainer: {
    style: ({ $theme, $disabled, $error, ...restProps }) => ({
      ...resolveStyle(DialogContainer, { $theme, $disabled, $error, ...restProps }),
    }),
    props: resolveProps({}, DialogContainer),
    ...resolveComponent(DialogContainer),
  },
  Close: {
    style: ({ $theme, $disabled, $error, ...restProps }) => ({
      ...resolveStyle(Close, { $theme, $disabled, $error, ...restProps }),
    }),
    props: resolveProps({}, Close),
    ...resolveComponent(Close),
  },
});
export default override;