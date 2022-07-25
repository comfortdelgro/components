import { resolveComponent, resolveProps, resolveStyle } from "../override";
import { margin } from "../../utils/helpers/style";

const override = ({ Label, Caption, ControlContainer }) => ({
  Label: {
    style: (props) => ({
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "12px",
      lineHeight: "125%",
      marginBottom: "-4px",
      // color: props.$theme.secondaryColors.label,
      ...resolveStyle(Label, props),
    }),
    props: resolveProps({}, Label),
    ...resolveComponent(Label),
  },
  Caption: {
    style: ({ $theme, $disabled, $error, ...restProps }) => ({
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "12px",
      lineHeight: "18px",
      ...margin("4px 0 0 0"),
      // color: $disabled 
      //         ? $theme.disabledColors.helper
      //         : ( $error ? $theme.secondaryColors.red : $theme.secondaryColors.helper),
      ...resolveStyle(Label, { $theme, $disabled, $error, ...restProps }),
    }),
    props: resolveProps({}, Caption),
    ...resolveComponent(Caption),
  },
  ControlContainer: {
    style: (props) => resolveStyle(ControlContainer, props),
    props: resolveProps({}, ControlContainer),
    ...resolveComponent(ControlContainer),
  },
});
export default override;