import * as React from "react";
import PropTypes from "prop-types";
import { Input as BuiInput } from "baseui/input";
import override from "./override";
import { useStyletron } from "baseui";

export const Input = ({ overrides, startEnhancer, endEnhancer, ...restProps }) => {
  const _overrides = override(overrides);
  const [ , theme ] = useStyletron();
  // TODO: must refactor star/endEnhancer rendering as a func
  let StartEnhancer = startEnhancer;
  StartEnhancer = StartEnhancer?.render === undefined 
                    ? StartEnhancer
                    :<StartEnhancer
                      size={theme.sizing.inputEnhancer}
                      color={theme.colors.inputStartEnhancer}/>

  let EndEnhancer = endEnhancer;
  EndEnhancer = EndEnhancer?.render === undefined 
                    ? EndEnhancer
                    :<EndEnhancer
                      size={theme.sizing.inputEnhancer}/>
  return (
    <BuiInput
      overrides={_overrides}
      startEnhancer={StartEnhancer}
      endEnhancer={EndEnhancer}
      {...restProps}
    />
  );
};

Input.propTypes = {
  overrides: PropTypes.shape({
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
  })
};

Input.defaultProps = {
  startEnhancer: undefined,
  endEnhancer: undefined,
  overrides: {
    Root: {},
    Input: {},
    InputContainer: {},
    After: {},
    Before: {},
    ClearIcon: {},
    ClearIconContainer: {},
    EndEnhancer: {},
    MaskToggleButton: {},
    MaskToggleHideIcon: {},
    MaskToggleShowIcon: {},
    StartEnhancer: {},
  }
};