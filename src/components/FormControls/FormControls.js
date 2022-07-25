import * as React from "react";
import PropTypes from "prop-types";
import { FormControl as BuiFormControl } from "baseui/form-control";
import override from "./override";

export const FormControl = ({ overrides, ...restProps }) => {
  const _overrides = override(overrides);
  return (
    <BuiFormControl
      overrides={_overrides}
      {...restProps}/>
  );
};

FormControl.propTypes = {
  overrides: PropTypes.shape({
    Label: PropTypes.object,
    Caption: PropTypes.object,
    ControlContainer: PropTypes.object,
  }),
};

FormControl.defaultProps = {
  overrides: {
    Label: {},
    Caption: {},
    ControlContainer: {},
  },
};
