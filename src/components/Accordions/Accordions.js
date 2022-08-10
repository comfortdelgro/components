import * as React from "react";
import PropTypes from "prop-types";
import {
  Accordion as BuiAccordion,
  Panel as BuiPanel,
} from "baseui/accordion";
import override from "./override";

export const Accordion = React.forwardRef(({ overrides, children, ...restProps }, ref) => {
  const localOverrides = override(overrides);
  return (
    <BuiAccordion
      ref={ref}
      overrides={localOverrides}
      {...restProps}
    >
      { children }
    </BuiAccordion>
  );
});

export const Panel = React.forwardRef((props, ref) => {
  return (
    <BuiPanel ref={ref} {...props}/>
  )
});

Accordion.propTypes = {
  overrides: PropTypes.shape({
    Content: PropTypes.object,
    ContentAnimationContainer: PropTypes.object,
    Header: PropTypes.object,
    PanelContainer: PropTypes.object,
    Root: PropTypes.object,
    ToggleIcon: PropTypes.object,
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
};

Accordion.defaultProps = {
  overrides: {
    Content: {},
    ContentAnimationContainer: {},
    Header: {},
    PanelContainer: {},
    Root: {},
    ToggleIcon: {},
  },
};
