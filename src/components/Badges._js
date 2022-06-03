import styled from 'styled-components';
import PropTypes from "prop-types";

const BADGE_TYPES = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  ORANGE: 'orange',
  PURPLE: 'purple',
  RED: 'red',
  GREEN: 'green',

  DEFAULT_LIGHT: 'default-light',
  PRIMARY_LIGHT: 'primary-light',
  SECONDARY_LIGHT: 'secondary-light',
  ORANGE_LIGHT: 'orange-light',
  PURPLE_LIGHT: 'purple-light',
  RED_LIGHT: 'red-light',
  GREEN_LIGHT: 'green-light',
};

export const Badge = styled.span`
  font-family: ${props => props.theme.secondaryFont};
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: -0.084px;
  text-transform: uppercase;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 4px;

  width: max-content

  ${({ type, bgColor, color, theme }) => {
    switch(type) {
      case BADGE_TYPES.PRIMARY:
        return `
          background-color: ${ bgColor ?  bgColor : theme.primaryColors.cdgBlue80};
          color: ${ color ?  color : theme.secondaryColors.N0};
        `;
      case BADGE_TYPES.ORANGE:
        return `
          background-color: ${ bgColor ?  bgColor : theme.secondaryColors.Y500};
          color: ${ color ?  color : theme.secondaryColors.N800};
        `;
      case BADGE_TYPES.PURPLE:
        return `
          background-color: ${ bgColor ?  bgColor : theme.secondaryColors.P400};
          color: ${ color ?  color : theme.secondaryColors.N0};
        `;
      case BADGE_TYPES.RED:
        return `
          background-color: ${ bgColor ?  bgColor : theme.secondaryColors.R400};
          color: ${ color ?  color : theme.secondaryColors.N0};
        `;
      case BADGE_TYPES.GREEN:
        return `
          background-color: ${ bgColor ?  bgColor : theme.secondaryColors.G400};
          color: ${ color ?  color : theme.secondaryColors.N0};
        `;
      case BADGE_TYPES.DEFAULT_LIGHT:
        return `
          background-color: ${ bgColor ?  bgColor : theme.secondaryColors.N40};
          color: ${ color ?  color : theme.secondaryColors.N500};
        `;
      case BADGE_TYPES.PRIMARY_LIGHT:
        return `
          background-color: ${ bgColor ?  bgColor : theme.primaryColors.B50};
          color: ${ color ?  color : theme.primaryColors.B500};
        `;
      case BADGE_TYPES.ORANGE_LIGHT:
        return `
          background-color: ${ bgColor ?  bgColor : theme.secondaryColors.Y75};
          color: ${ color ?  color : theme.secondaryColors.N800};
        `;
      case BADGE_TYPES.PURPLE_LIGHT:
        return `
          background-color: ${ bgColor ?  bgColor : theme.secondaryColors.P50};
          color: ${ color ?  color : theme.secondaryColors.P500};
        `;
      case BADGE_TYPES.RED_LIGHT:
        return `
          background-color: ${ bgColor ?  bgColor : theme.secondaryColors.R50};
          color: ${ color ?  color : theme.secondaryColors.R500};
        `;
      case BADGE_TYPES.GREEN_LIGHT:
        return `
          background-color: ${ bgColor ?  bgColor : theme.secondaryColors.G50};
          color: ${ color ?  color : theme.secondaryColors.G500};
        `;

      default: 
        return `
          background-color: ${ bgColor ?  bgColor : theme.secondaryColors.N500};
          color: ${ color ?  color : theme.secondaryColors.N0};
        `;
    }
  }}
  border-radius: 3px;
`;

Badge.displayName = 'Badge';

Badge.propTypes = {
  type: PropTypes.oneOf(Object.values(BADGE_TYPES)),
  bgColor: PropTypes.string,
  color: PropTypes.string,
};

Badge.defaultProps = {
  type: BADGE_TYPES.NEUTRAL,
  bgColor: "",
  color: "",
};