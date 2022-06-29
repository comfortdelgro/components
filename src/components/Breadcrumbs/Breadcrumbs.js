import * as React from "react";
import PropTypes from "prop-types";
import { Breadcrumbs as BuiBreadcrumbs } from "baseui/breadcrumbs";
import override from "./override";

export const Breadcrumbs = ({ overrides, children, ...restProps }) => {
  const localOverrides = override(overrides);
  return (
    <BuiBreadcrumbs
      overrides={localOverrides}
    >
      { children }
    </BuiBreadcrumbs>
  );
};

Breadcrumbs.propTypes = {
  overrides: PropTypes.shape({
    Root: PropTypes.object,
    Separator: PropTypes.object,
    List: PropTypes.object,
    ListItem: PropTypes.object,
    Icon: PropTypes.object,
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
};

Breadcrumbs.defaultProps = {
  overrides: {
    Root: {},
    Separator: {},
    List: {},
    ListItem: {},
    Icon: {},
  },
};
