import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// TODO: refactor default props declaration
 
// TODO: centralized types declaration pattern for all components
export const RADIO_BUTTON_TYPES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  ORANGE: 'orange',
  LIGHT: 'light',
  LIGHT_SECONDARY: 'light-secondary',
};

export class RadioGroup extends React.Component {
  render() {
    const {
      Component,
      name,
      selectedValue,
      onClickRadioButton,
      children,
      ...rest
    } = this.props;
    return (
      <Component role="radiogroup" {...rest} name={name}>
        {
          React.Children.map(children, element =>
            React.cloneElement(element, {
              ...element.props,
              checked: selectedValue === element.props.value,
              onChange: () => onClickRadioButton(element.props.value),
              name
            })
          )
        }
      </Component>
    );
  }
}

RadioGroup.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node.isRequired,
  Component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object
  ])
};

RadioGroup.defaultProps = {
  name: "",
  selectedValue: "",
  Component: "div"
};

// eslint-disable-next-line react/no-multi-comp
export class Radio extends React.Component {
  render() {
    const { type, onChange, value, labelText, checked, name, size, disabled } = this.props;
    
    return (
      <Root type={type} size={size} checked={checked} disabled={disabled}>
        <label>
          {labelText}
          <Input
            type="radio"
            radioType={type}
            onChange={onChange}
            name={name}
            value={value}
            checked={checked}
            aria-checked={checked}
            disabled={disabled}
          />
          <Fill size={size} />
        </label>
      </Root>
    );
  }
}

Radio.propTypes = {
  type: PropTypes.oneOf(Object.values(RADIO_BUTTON_TYPES)),
  onChange: PropTypes.func,
  value: PropTypes.string,
  labelText: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
};

Radio.defaultProps = {
  type: 'primary',
  onChange: () => {},
  value: "",
  labelText: "",
  size: "24px",
  disabled: false,
};

const Root = styled.div`
  margin: 5px;
  cursor: pointer;
  width: ${props => props.size};
  height: ${props => props.size};
  position: relative;
  label {
    margin-left: calc(${props => props.size} + 6px);
    white-space: nowrap;
    font-weight: 400;
    font-size: 14px;
    line-height: ${props => props.size};
  }
  &::before {
    content: "";
    border-radius: 100%;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 0;
    // Solving Modifiers
    ${(props) => {
      const borderStyle = `2px solid ${(props.borderColor ? props.borderColor : props.theme.outline)}`;
      let style = '';
      if (props.checked || props.disabled) {
        const bgColor = (({ type, disabled, theme }) => {
          if (disabled) return theme.disabled;
          switch (type) {
            case RADIO_BUTTON_TYPES.SECONDARY: return theme.secondaryColors.secondaryButton;
            case RADIO_BUTTON_TYPES.ORANGE: return theme.secondaryColors.orange;
            case RADIO_BUTTON_TYPES.LIGHT: return theme.primaryColors.white;
            case RADIO_BUTTON_TYPES.LIGHT_SECONDARY: return theme.primaryColors.white;
            default: return theme.primaryColors.cdgBlue80;
          } 
        })(props);

        const hasBorder = props.type === RADIO_BUTTON_TYPES.LIGHT; 

        style += `
          border: ${ hasBorder ? borderStyle : 'unset' };
          background: ${props.backgroundColor ? props.backgroundColor : bgColor}
        `;
      } else {

        const hasBorder = !(props.type === RADIO_BUTTON_TYPES.LIGHT_SECONDARY || props.disabled);

        style += `
          border: ${ hasBorder ? borderStyle : `unset` };
          background: ${props.backgroundColor ? props.backgroundColor : props.theme.primaryColors.white};
        `;
      }

      if (props.type === RADIO_BUTTON_TYPES.LIGHT_SECONDARY) {
        style += `
          box-shadow: ${props.theme.shadows.light};
        `;
      }

      return style;
    }}
  }
`;

const Fill = styled.div`
  background: ${props => (props.fillColor ? props.fillColor : props.theme.primaryColors.white)};
  width: 0;
  height: 0;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease-in, height 0.2s ease-in;
  pointer-events: none;
  z-index: 1;

  &::before {
    content: "";
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
  }
`;

const Input = styled.input`
  opacity: 0;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:checked {
    & ~ ${Fill} {
      width: calc(100% - 58%);
      height: calc(100% - 58%);
      transition: width 0.2s ease-out, height 0.2s ease-out;

      &::before {
        opacity: 1;
        transition: opacity 1s ease;
        background: ${ ({ radioType, theme, disabled }) => {
          if (disabled) return theme.textOnDisabled;

          switch(radioType) {
            case RADIO_BUTTON_TYPES.SECONDARY: return theme.primaryColors.cdgBlue80;
            case RADIO_BUTTON_TYPES.LIGHT: return theme.primaryColors.cdgBlue80;
            case RADIO_BUTTON_TYPES.LIGHT_SECONDARY: return theme.primaryColors.cdgBlue80;
            default: return theme.primaryColors.white;
          }
        }};
      }
    }
  }

  &:hover {
    & ~ ${Root} {
      &:before {
        border-color: ${({theme}) => theme.shades.B20}
        background-color: ${({theme}) => theme.shades.B20}
      }
    }
  }
`;