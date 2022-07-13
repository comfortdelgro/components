import { resolveComponent, resolveProps, resolveStyle } from "../override";
import { padding } from "../../utils/helpers/style";

const override = ({
    Root,
}) => {

  let bgColor = undefined;
  let contentColor = undefined;

  return {
    Root: {
      style: (props) => ({
        height: "88px",
        backgroundColor: props.$theme.colors.primary,
        color: props.$theme.colors.primaryB,
        ...padding("16px 48px 16px 16px"),
        ...resolveStyle(Root, props)
      }),
      props: resolveProps({}, Root),
      ...resolveComponent(Root),
    },
  }
};

export default override;
