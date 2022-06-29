import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

// TODO: refactor default props declaration
 
// TODO: centralized types declaration pattern for all components
export const RADIO_BUTTON_TYPES = {
  PRIMARY: 'primary',
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
  type: RADIO_BUTTON_TYPES.PRIMARY,
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

  ${({checked, theme}) => {
    if (!checked) {
      return css`
        &:hover {
          &::before {
            border-color: ${theme.colors.radioButtonBorderHovered};
            background: ${theme.colors.radioButtonFillHovered};
          }
        }
      `;
    }
  }}
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
    ${({ checked, disabled, theme }) => {
      const borderStyle = `2px solid`;
      if (disabled) {
        return `
          border: ${borderStyle} ${theme.colors.radioButtonBorderDisabled};
          background: ${theme.colors.radioButtonFillDisabled}
        `;
      } else if (checked) {
        return `
          border: ${borderStyle} ${theme.colors.radioButtonBorderSelected};
          background: ${theme.colors.radioButtonFillSelected};
        `;
      } else {
        return `
          border: ${borderStyle} ${theme.colors.radioButtonBorder};
          background: ${theme.colors.radioButtonFill};
        `;
      }
    }}
  }
`;

const Fill = styled.div`
  background: ${({theme}) => theme.colors.radioButtonMarkFill};
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
    }
  }
`;