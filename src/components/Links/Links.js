import * as React from "react";
import PropTypes from "prop-types";
import { StyledLink } from "baseui/link";
import useStyler from "./styles";

export const Link = ({ href, isActive, children, ...restProps }) => {
  const className = useStyler({isActive});
  return (
    <StyledLink
      href={href}
      className={className}
      children={children}
      {...restProps}
    />
  );
};

Link.propTypes = {
  href: PropTypes.string,
  isActive: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
};

Link.defaultPorps = {
  isActive: false,
};