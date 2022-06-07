import * as React from "react";
import PropTypes from "prop-types";
import { Input as BuiInput } from "baseui/input";
import override from "./override";

export const Input = (props) => {
  const {
    value, placeholder,
    disabled, error, isFocused,
    onChange, onBlur
  } = props;
  const overrides = override(props);

  return (
    <BuiInput
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

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,

  disabled: PropTypes.bool,
  error: PropTypes.bool,
  isFocused: PropTypes.bool,

  onChange: PropTypes.func,
  onBlur: PropTypes.func,

  Root: PropTypes.object,
  Input: PropTypes.object,
  InputContainer: PropTypes.object,
  After: PropTypes.object,
  Before: PropTypes.object,
  ClearIcon: PropTypes.object,
  ClearIconContainer: PropTypes.object,
  EndEnhancer: PropTypes.object,
  MaskToggleButton: PropTypes.object,
  MaskToggleHideIcon: PropTypes.object,
  MaskToggleShowIcon: PropTypes.object,
  StartEnhancer: PropTypes.object,
};

Input.defaultProps = {
  value: '',
  placeholder: '',

  disabled: false,
  error: false,
  isFocused: false,

  Root: undefined,
  Input: undefined,
  InputContainer: undefined,
  After: undefined,
  Before: undefined,
  ClearIcon: undefined,
  ClearIconContainer: undefined,
  EndEnhancer: undefined,
  MaskToggleButton: undefined,
  MaskToggleHideIcon: undefined,
  MaskToggleShowIcon: undefined,
  StartEnhancer: undefined,
};