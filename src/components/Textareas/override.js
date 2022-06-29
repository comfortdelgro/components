import { resolveComponent, resolveProps, resolveStyle } from "../override";
import { borderRadius, borderWithoutColors, padding } from "../../utils/helpers/style";

const override = ({
  Root,
  Input,
  InputContainer,
}) => {

  return {
    Root: {
      style: (props) => {
        const borderWidth = (props.$isFocused || props.$error) ? 2 : 1;
        return {
          ...borderWithoutColors(`${borderWidth}px solid`),
          ...borderRadius("8px"),
          ...resolveStyle(Root, props),
        }
      },
      props: resolveProps({}, Root),
      ...resolveComponent(Root),
    },
    Input: {
      style: (props) => {
        console.log('inputText', props.$theme.colors.inputText);
        return {
          ...padding("12px 16px 12px 16px"),
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "20px",
          // color: props.$theme.colors.inputText,
          ...resolveStyle(Input, props),
        }
      },
      props: resolveProps({}, Input),
      ...resolveComponent(Input),
    },
    InputContainer: {
      style: (props) => ({
        height: "131px",
        ...resolveStyle(InputContainer, props),
      }),
      props: resolveProps({}, InputContainer),
      ...resolveComponent(InputContainer),
    },
  }
};

export default override;
