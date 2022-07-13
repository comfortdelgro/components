import * as React from "react";
import PropTypes from "prop-types";
import { Textarea as BuiTextarea } from "baseui/textarea";
import override from "./override";

export const Textarea = (props) => {
  const {
    value, placeholder,
    disabled, error, isFocused,
    onChange, onBlur
  } = props;
  const overrides = override(props);

  return (
    <BuiTextarea
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      disabled={disabled}
      error={error}
      isFocused={isFocused}
      overrides={overrides}
    />
  );
};

Textarea.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,

  disabled: PropTypes.bool,
  error: PropTypes.bool,
  isFocused: PropTypes.bool,

  onChange: PropTypes.func,
  onBlur: PropTypes.func,

  Input: PropTypes.object,
  InputContainer: PropTypes.object,
};

Textarea.defaultProps = {
  value: '',
  placeholder: '',

  disabled: false,
  error: false,
  isFocused: false,

  Input: undefined,
  InputContainer: undefined,
};