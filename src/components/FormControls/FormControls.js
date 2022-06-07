import * as React from "react";
import PropTypes from "prop-types";
import { FormControl as BuiFormControl } from "baseui/form-control";
import override from "./override";

export const FormControl = (props) => {
  const { label, caption, children } = props;
  const overrides = override(props);
  return (
    <BuiFormControl
      label={label}
      caption={caption}
      overrides={overrides}
    >
      { children }
    </BuiFormControl>
  );
};

FormControl.propTypes = {
  label: PropTypes.string,
  caption: PropTypes.string,

  disabled: PropTypes.bool,
  error: PropTypes.bool,

  onChange: PropTypes.func,
  onBlur: PropTypes.func,

  Label: PropTypes.object,
  Caption: PropTypes.object,

  children: PropTypes.element,
};

FormControl.defaultProps = {
  label: '',
  caption: '',

  disabled: false,
  error: false,

  Root: undefined,
  Input: undefined,
};
