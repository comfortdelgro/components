import { resolveComponent, resolveProps, resolveStyle } from "../override";
import { borderWithoutColors, borderRadius, padding, noPadding } from "../../utils/helpers/style";

const override = ({
  Root,
  Input,
  InputContainer,
  After,
  Before,
  ClearIcon,
  ClearIconContainer,
  EndEnhancer,
  MaskToggleButton,
  MaskToggleHideIcon,
  MaskToggleShowIcon,
  StartEnhancer,
}) => {

  return {
    Root: {
      style: (props) => ({
        ...borderWithoutColors('2px solid'),
        ...borderRadius("8px"),
        ...resolveStyle(Root, props),
      }),
      props: resolveProps({}, Root),
      ...resolveComponent(Root),
    },
    InputContainer: {
      style: (props) => resolveStyle(InputContainer, props),
      props: resolveProps({}, InputContainer),
      ...resolveComponent(InputContainer),
    },
    Input: {
      style: (props) => ({
        ...padding("13px 16px 13px 16px"),
        color: props.$theme.colors.inputText,
        ...props.$theme.typography.input,
        ...resolveStyle(Input, props),
      }),
      props: resolveProps({}, Input),
      ...resolveComponent(Input),
    },
    After: {
      style: (props) => resolveStyle(After, props),
      props: resolveProps({}, After),
      ...resolveComponent(After),
    },
    Before: {
      style: (props) => resolveStyle(Before, props),
      props: resolveProps({}, Before),
      ...resolveComponent(Before),
    },
    ClearIcon: {
      style: (props) => resolveStyle(ClearIcon, props),
      props: resolveProps({}, ClearIcon),
      ...resolveComponent(ClearIcon),
    },
    ClearIconContainer: {
      style: (props) => resolveStyle(ClearIconContainer, props),
      props: resolveProps({}, ClearIconContainer),
      ...resolveComponent(ClearIconContainer),
    },
    EndEnhancer: {
      style: (props) => resolveStyle(EndEnhancer, props),
      props: resolveProps({}, EndEnhancer),
      ...resolveComponent(EndEnhancer),
    },
    MaskToggleButton: {
      style: (props) => resolveStyle(MaskToggleButton, props),
      props: resolveProps({}, MaskToggleButton),
      ...resolveComponent(MaskToggleButton),
    },
    MaskToggleHideIcon: {
      style: (props) => resolveStyle(MaskToggleHideIcon, props),
      props: resolveProps({}, MaskToggleHideIcon),
      ...resolveComponent(MaskToggleHideIcon),
    },
    MaskToggleShowIcon: {
      style: (props) => resolveStyle(MaskToggleShowIcon, props),
      props: resolveProps({}, MaskToggleShowIcon),
      ...resolveComponent(MaskToggleShowIcon),
    },
    StartEnhancer: {
      style: (props) => ({
        ...noPadding(),
        ...resolveStyle(StartEnhancer, props),
      }),
      props: resolveProps({}, StartEnhancer),
      ...resolveComponent(StartEnhancer),
    },
  }
};

export default override;
