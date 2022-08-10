import * as React from "react";
import PropTypes from "prop-types";
import {
  Card as BuiCard,
  StyledAction as BuiStyledAction,
  StyledBody as BuiStyledBody,
  StyledContents as BuiStyledContents,
  StyledHeaderImage as BuiStyledHeaderImage,
  StyledThumbnail as BuiStyledThumbnail,
  StyledTitle as BuiStyledTitle,
  StyledRoot as BuiStyledRoot,
  StyledWrapper as BuiStyledWrapper,
} from "baseui/card";
import override from "./override";

export const Card = React.forwardRef(({ overrides, children, ...restProps }, ref) => {
  const localOverrides = override(overrides);
  return (
    <BuiCard
      ref={ref}
      overrides={localOverrides}
      {...restProps}
    >
      { children }
    </BuiCard>
  );
});

export const StyledAction = BuiStyledAction;
export const StyledBody = BuiStyledBody;
export const StyledContents = BuiStyledContents;
export const StyledHeaderImage = BuiStyledHeaderImage;
export const StyledThumbnail = BuiStyledThumbnail;
export const StyledTitle = BuiStyledTitle;
export const StyledRoot = BuiStyledRoot;
export const StyledWrapper = BuiStyledWrapper;

Card.propTypes = {
  overrides: PropTypes.shape({
    Action: PropTypes.object,
    Body: PropTypes.object,
    Contents: PropTypes.object,
    HeaderImage: PropTypes.object,
    Root: PropTypes.object,
    Thumbnail: PropTypes.object,
    Title: PropTypes.object,
    Wrapper: PropTypes.object,
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
};

Card.defaultProps = {
  overrides: {
    Action: {},
    Body: {},
    Contents: {},
    HeaderImage: {},
    Root: {},
    Thumbnail: {},
    Title: {},
    Wrapper: {},
  },
};
