import * as React from "react";
import PropTypes from "prop-types";
import { Select as BuiSelect } from "baseui/select";
import override from "./override";

export const Dropdown = ({ overrides, ...restProps }) => {
  const localOverrides = override(overrides);

  return (
    <BuiSelect
      overrides={localOverrides}
      {...restProps}
    />
  );
};

Dropdown.propTypes = {
  overrides: PropTypes.shape({
    Root: PropTypes.object,
    ClearIconnested: PropTypes.object,
    ControlContainer: PropTypes.object,
    Dropdown: PropTypes.object,
    DropdownContainer: PropTypes.object,
    DropdownListItem: PropTypes.object,
    DropdownOption: PropTypes.object,
    Input: PropTypes.object,
    InputContainer: PropTypes.object,
    IconsContainer: PropTypes.object,
    LoadingIndicatornested: PropTypes.object,
    OptionContent: PropTypes.object,
    Placeholder: PropTypes.object,
    Popovernested: PropTypes.object,
    SearchIconnested: PropTypes.object,
    SearchIconContainer: PropTypes.object,
    SelectArrownested: PropTypes.object,
    SingleValue: PropTypes.object,
    StatefulMenu: PropTypes.object,
    Tagnested: PropTypes.object,
    ValueContainer: PropTypes.object,
  }),
};

Dropdown.defaultProps = {
  overrides: {
    Root: {},
    ClearIconnested: {},
    ControlContainer: {},
    Dropdown: {},
    DropdownContainer: {},
    DropdownListItem: {},
    DropdownOption: {},
    Input: {},
    InputContainer: {},
    IconsContainer: {},
    LoadingIndicatornested: {},
    OptionContent: {},
    Placeholder: {},
    Popovernested: {},
    SearchIconnested: {},
    SearchIconContainer: {},
    SelectArrownested: {},
    SingleValue: {},
    StatefulMenu: {},
    Tagnested: {},
    ValueContainer: {},
  },
};