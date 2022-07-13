import { resolveComponent, resolveProps, resolveStyle } from "../override";
import { borderRadius, border, padding } from "../../utils/helpers/style";

const override = ({
  Root,
  ClearIconnested,
  ControlContainer,
  Dropdown,
  DropdownContainer,
  DropdownListItem,
  DropdownOption,
  Input,
  InputContainer,
  IconsContainer,
  LoadingIndicatornested,
  OptionContent,
  Placeholder,
  Popovernested,
  SearchIconnested,
  SearchIconContainer,
  SelectArrownested,
  SingleValue,
  StatefulMenu,
  Tagnested,
  ValueContainer,
}) => {

  return {
    Root: {
      style: (props) => resolveStyle(Root, props),
      props: resolveProps({}, Root),
      ...resolveComponent(Root),
    },
    ClearIconnested: {
      style: (props) => resolveStyle(ClearIconnested, props),
      props: resolveProps({}, ClearIconnested),
      ...resolveComponent(ClearIconnested),
    },
    ControlContainer: {
      style: (props) => resolveStyle(ControlContainer, props),
      props: resolveProps({}, ControlContainer),
      ...resolveComponent(ControlContainer),
    },
    Dropdown: {
      style: (props) => resolveStyle(Dropdown, props),
      props: resolveProps({}, Dropdown),
      ...resolveComponent(Dropdown),
    },
    DropdownContainer: {
      style: (props) => resolveStyle(DropdownContainer, props),
      props: resolveProps({}, DropdownContainer),
      ...resolveComponent(DropdownContainer),
    },
    DropdownListItem: {
      style: (props) => resolveStyle(DropdownListItem, props),
      props: resolveProps({}, DropdownListItem),
      ...resolveComponent(DropdownListItem),
    },
    DropdownOption: {
      style: (props) => resolveStyle(DropdownOption, props),
      props: resolveProps({}, DropdownOption),
      ...resolveComponent(DropdownOption),
    },
    Input: {
      style: (props) => resolveStyle(Input, props),
      props: resolveProps({}, Input),
      ...resolveComponent(Input),
    },
    InputContainer: {
      style: (props) => resolveStyle(InputContainer, props),
      props: resolveProps({}, InputContainer),
      ...resolveComponent(InputContainer),
    },
    IconsContainer: {
      style: (props) => resolveStyle(IconsContainer, props),
      props: resolveProps({}, IconsContainer),
      ...resolveComponent(IconsContainer),
    },
    LoadingIndicatornested: {
      style: (props) => resolveStyle(LoadingIndicatornested, props),
      props: resolveProps({}, LoadingIndicatornested),
      ...resolveComponent(LoadingIndicatornested),
    },
    OptionContent: {
      style: (props) => resolveStyle(OptionContent, props),
      props: resolveProps({}, OptionContent),
      ...resolveComponent(OptionContent),
    },
    Placeholder: {
      style: (props) => resolveStyle(Placeholder, props),
      props: resolveProps({}, Placeholder),
      ...resolveComponent(Placeholder),
    },
    Popovernested: {
      style: (props) => resolveStyle(Popovernested, props),
      props: resolveProps({}, Popovernested),
      ...resolveComponent(Popovernested),
    },
    SearchIconnested: {
      style: (props) => resolveStyle(SearchIconnested, props),
      props: resolveProps({}, SearchIconnested),
      ...resolveComponent(SearchIconnested),
    },
    SearchIconContainer: {
      style: (props) => resolveStyle(SearchIconContainer, props),
      props: resolveProps({}, SearchIconContainer),
      ...resolveComponent(SearchIconContainer),
    },
    SelectArrownested: {
      style: (props) => resolveStyle(SelectArrownested, props),
      props: resolveProps({}, SelectArrownested),
      ...resolveComponent(SelectArrownested),
    },
    SingleValue: {
      style: (props) => resolveStyle(SingleValue, props),
      props: resolveProps({}, SingleValue),
      ...resolveComponent(SingleValue),
    },
    StatefulMenu: {
      style: (props) => resolveStyle(StatefulMenu, props),
      props: resolveProps({}, StatefulMenu),
      ...resolveComponent(StatefulMenu),
    },
    Tagnested: {
      style: (props) => resolveStyle(Tagnested, props),
      props: resolveProps({}, Tagnested),
      ...resolveComponent(Tagnested),
    },
    ValueContainer: {
      style: (props) => resolveStyle(ValueContainer, props),
      props: resolveProps({}, ValueContainer),
      ...resolveComponent(ValueContainer),
    },
  }
};

export default override;
