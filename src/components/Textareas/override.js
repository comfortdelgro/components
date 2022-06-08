import { resolveComponent, resolveProps, resolveStyle } from "../override";
import { applyToAllSides, border, borderRadius, borderWithoutColors, noBorder, padding } from "../../utils/helpers/style";

const override = ({
  disabled, error, isFocused,
  Root,
  Input,
  InputContainer,
}) => {

  const getInputBg = ($theme) => disabled ? $theme.disabledColors.inputBg : $theme.primaryColors.white;
  const getBorderColor = ($theme) =>(
    error
      ? disabled? $theme.outline10 : $theme.secondaryColors.red
      : isFocused ? $theme.primaryColors.blue : $theme.outline10
  );

  return {
    Root: {
      style: (props) => {
        const borderWidth = (props.$isFocused || props.$error) ? 2 : 1;
        return {
          ...borderWithoutColors(`${borderWidth}px solid`),
          ...borderRadius("8px"),
          // backgroundColor: "unset !important",
          ...resolveStyle(Root, props),
        }
      },
      props: resolveProps({}, Root),
      ...resolveComponent(Root),
    },
    Input: {
      style: (props) => {
        const bgColor = getInputBg(props.$theme);
        return {
          ...padding("12px 16px 12px 16px"),
          // backgroundColor: bgColor,
          // ...noBorder(),
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "20px",
          color: props.$theme.colors.inputText,
          // '::placeholder': {
          //   color: props.$theme.placeholderColor,
          // },
          ...resolveStyle(Input, props),
        }
      },
      props: resolveProps({}, Input),
      ...resolveComponent(Input),
    },
    InputContainer: {
      style: (props) => ({
        height: "131px",
        // ...noBorder(),
        // backgroundColor: "unset !important",
        ...resolveStyle(InputContainer, props),
      }),
      props: resolveProps({}, InputContainer),
      ...resolveComponent(InputContainer),
    },
  }
};

export default override;
