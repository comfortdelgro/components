/* eslint-disable import/no-anonymous-default-export */
import * as React from "react";
import PropTypes from "prop-types";
import {
  Checkbox as BuiCheckbox,
  LABEL_PLACEMENT
} from "baseui/checkbox";
import override from "./override";

export const Checkbox = ({ overrides, children, ...restProps }) => {
  const localOverrides = override(overrides);
  return (
    <BuiCheckbox
      labelPlacement={LABEL_PLACEMENT.right}
      overrides={localOverrides}
      {...restProps}>
      {children}
    </BuiCheckbox>
  );
};

Checkbox.propTypes = {
  overrides: PropTypes.shape({
    Root: PropTypes.object,
    Checkmark: PropTypes.object,
    Label: PropTypes.object,
    Toggle: PropTypes.object,
    ToggleInner: PropTypes.object,
    ToggleTrack: PropTypes.object,
  }),
};

Checkbox.defaultProps = {
  overrides: {
    Root: {},
    Checkmark: {},
    Label: {},
    Toggle: {},
    ToggleInner: {},
    ToggleTrack: {},
  },
};