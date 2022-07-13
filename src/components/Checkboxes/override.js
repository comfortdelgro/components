import { resolveComponent, resolveProps, resolveStyle } from "../override";
import { borderRadius, borderColors, borderWithoutColors } from "../../utils/helpers/style";

const override = ({
  Root,
  Checkmark,
  Label,
  Toggle,
  ToggleInner,
  ToggleTrack,
}) => {

  return {
    Root: {
      style: (props) => resolveStyle(Root, props),
      props: resolveProps({}, Root),
      ...resolveComponent(Root),
    },
    Checkmark: {
      style: (props) => ({
        width: '14px',
        height: '14px',
        ...borderWithoutColors("2px solid"),
        ...borderRadius('3px'),
        boxShadow: 'unset',
        ':focus': borderColors(props.$theme.colors.tickBorderFocus),
        ':hover': (props.$checked || props.$disabled)
                    ? {}
                    : borderColors(props.$theme.colors.tickBorderHover),
        ...resolveStyle(Checkmark, props)
      }),
      props: resolveProps({}, Checkmark),
      ...resolveComponent(Checkmark),
    },
    Label: {
      style: (props) => ({
        color: props.$theme.colors.tickText,
        ':disabled': {
          color: props.$theme.colors.tickText,
        },
        ...props.$theme.typography.checkBoxLabel,
        ...resolveStyle(Toggle, props)
      }),
      props: resolveProps({}, Toggle),
      ...resolveComponent(Toggle),
    },
    ToggleInner: {
      style: (props) => resolveStyle(ToggleInner, props),
      props: resolveProps({}, ToggleInner),
      ...resolveComponent(ToggleInner),
    },
    ToggleTrack: {
      style: (props) => resolveStyle(ToggleTrack, props),
      props: resolveProps({}, ToggleTrack),
      ...resolveComponent(ToggleTrack),
    },
  }
};

export default override;
