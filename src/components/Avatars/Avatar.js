import * as React from "react";
import PropTypes from "prop-types";
import {
  Avatar as BuiAvatar,
} from "baseui/avatar";
import override from "./override";

export const Avatar = React.forwardRef(({ overrides, size, ...restProps }, ref) => {
  const localOverrides = override(overrides);
  return (
    <BuiAvatar
      ref={ref}
      overrides={localOverrides}
      size={size}
      {...restProps}
    />
  );
});

export const SIZES = {
  lg: "40px",
  md: "32px",
  sm: "24px", 
  xs: "16px",
}

Avatar.propTypes = {
  overrides: PropTypes.shape({
    Root: PropTypes.object,
    Avatar: PropTypes.object,
    Initials: PropTypes.object,
  }),
  size: PropTypes.string
};

Avatar.defaultProps = {
  overrides: {
    Root: {},
    Avatar: {},
    Initials: {},
  },
  size: SIZES.md,
};
