import * as React from "react";
import PropTypes from "prop-types";
import { Modal as BuiModal } from "baseui/modal";
import override from "./override";
import { styled } from "baseui";
import { Button } from "../Buttons/Buttons";

export const ModalHeader = styled('div', ({ $theme }) => {
  const marginStartDir = $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';
  const marginEndDir = $theme.direction === 'rtl' ? 'marginLeft' : 'marginRight';

  return {
    ...$theme.typography.h600,
    color: $theme.colors.contentPrimary,
    marginTop: $theme.sizing.scale825,
    marginBottom: $theme.sizing.scale850,
    [marginStartDir]: $theme.sizing.scale825,
    // Slightly more margin than left side to leave room for close button
    [marginEndDir]: $theme.sizing.scale825,
  };
});

export const ModalBody = styled('div', ({ $theme }) => ({
  ...$theme.typography.font200,
  color: $theme.colors.contentSecondary,
  marginTop: $theme.sizing.noScale,
  marginLeft: $theme.sizing.scale825,
  marginRight: $theme.sizing.scale825,
  marginBottom: $theme.sizing.scale850,
}));

export const ModalFooter = styled('div', ({ $theme }) => ({
  ...$theme.typography.font200,
  marginTop: $theme.sizing.noScale,
  marginLeft: $theme.sizing.scale825,
  marginRight: $theme.sizing.scale825,
  marginBottom: $theme.sizing.scale825,
  textAlign: $theme.direction === 'rtl' ? 'left' : 'right',
}));

export const ModalButton = React.forwardRef((props, ref) => {
  // TODO:: proper theme injection
  return <Button ref={ref} {...props} style={{ marginRight: '10px', }}/>
});

export const Modal = ({ overrides, children, ...restProps }) => {
  const localOverrides = override(overrides);
  return (
    <BuiModal
      overrides={localOverrides}
      {...restProps}
    >
      { children }
    </BuiModal>
  );
};

Modal.propTypes = {
  overrides: PropTypes.shape({
    Root: PropTypes.object,
    Dialog: PropTypes.object,
    DialogContainer: PropTypes.object,
    Close: PropTypes.object,
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
};

Modal.defaultProps = {
  overrides: {
    Root: {},
    Dialog: {},
    DialogContainer: {},
    Close: {},
  },
};
