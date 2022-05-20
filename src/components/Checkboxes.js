/* eslint-disable import/no-anonymous-default-export */
import * as React from "react";
import {
  Checkbox,
  LABEL_PLACEMENT
} from "baseui/checkbox";
import { defaultTheme as theme } from '../utils';

// TODO:: refactor cleaner overrides design if team confirmed baseweb as foundation.

// TODO: centralized types declaration pattern for all components
export const CHECK_BOX_TYPES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  ORANGE: 'orange',
  LIGHT: 'light',
  LIGHT_SECONDARY: 'light-secondary',
};

// TODO:: Refactor as an Icon class
const MarkIconWhite = 'url("data:image/svg+xml,%0A%20%20%20%20%3Csvg%20width%3D%2217%22%20height%3D%2213%22%20viewBox%3D%220%200%2017%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%20%20%3Cpath%20d%3D%22M6.50002%2012.6L0.400024%206.60002L2.60002%204.40002L6.50002%208.40002L13.9%200.900024L16.1%203.10002L6.50002%2012.6Z%22%20fill%3D%22%23FFFFFF%22%2F%3E%0A%20%20%20%20%3C%2Fsvg%3E%0A%20%20")';
const MarkIconBlue = 'url("data:image/svg+xml,%0A%20%20%20%20%3Csvg%20width%3D%2217%22%20height%3D%2213%22%20viewBox%3D%220%200%2017%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%20%20%3Cpath%20d%3D%22M6.50002%2012.6L0.400024%206.60002L2.60002%204.40002L6.50002%208.40002L13.9%200.900024L16.1%203.10002L6.50002%2012.6Z%22%20fill%3D%22%230142AF%22%2F%3E%0A%20%20%20%20%3C%2Fsvg%3E%0A%20%20")';
const MarkIconGrey = 'url("data:image/svg+xml,%0A%20%20%20%20%3Csvg%20width%3D%2217%22%20height%3D%2213%22%20viewBox%3D%220%200%2017%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%20%20%3Cpath%20d%3D%22M6.50002%2012.6L0.400024%206.60002L2.60002%204.40002L6.50002%208.40002L13.9%200.900024L16.1%203.10002L6.50002%2012.6Z%22%20fill%3D%22%23757575%22%2F%3E%0A%20%20%20%20%3C%2Fsvg%3E%0A%20%20")';

export class CheckBox extends React.Component {
  render() {
    const { type, checked, onChecked, style, disabled, children } = this.props;

    let borderColor = theme.disabled;
    let backgroundColor = theme.primaryColors.white;
    let backgroundImage = 'unset';
    let boxShadow = 'unset';

    switch (true) {
      case (disabled):
          borderColor = backgroundColor = theme.secondaryColors.secondaryButton;
          if (checked) backgroundImage = MarkIconGrey;
        break;
      case (type === CHECK_BOX_TYPES.SECONDARY && checked):
          borderColor = backgroundColor = theme.secondaryColors.secondaryButton;
          backgroundImage = MarkIconBlue;
        break;
      case (type === CHECK_BOX_TYPES.ORANGE && checked):
          borderColor = backgroundColor = theme.secondaryColors.orange;
          backgroundImage = MarkIconWhite;
        break;
      case (type === CHECK_BOX_TYPES.LIGHT && checked):
          backgroundImage = MarkIconBlue;
        break;
      case (type === CHECK_BOX_TYPES.LIGHT_SECONDARY):
          if (checked) backgroundImage = MarkIconBlue;
          borderColor = theme.primaryColors.white;
          // TODO:: add to shadow theme config if design is stable about "light shadow"
          boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.08)';
        break;
      default:
          if (checked) {
            borderColor = backgroundColor = theme.primaryColors.cdgBlue80;
            backgroundImage = MarkIconWhite;
          }
        break;
    }

    return (
      <Checkbox
        checked={checked}
        onChange={e => onChecked(e.target.checked)}
        labelPlacement={LABEL_PLACEMENT.right}
        disabled={disabled}
        overrides={{
          Checkmark: {
            style: () => ({
              width: '24px',
              height: '24px',
              borderTopColor: borderColor,
              borderRightColor: borderColor,
              borderBottomColor: borderColor,
              borderLeftColor: borderColor,
              borderTopWidth: '2px',
              borderRightWidth: '2px',
              borderBottomWidth: '2px',
              borderLeftWidth: '2px',
              borderTopStyle: 'solid',
              borderRightStyle: 'solid',
              borderBottomStyle: 'solid',
              borderLeftStyle: 'solid',             
              backgroundColor,
              borderTopRightRadius: '4px',
              borderBottomRightRadius: '4px',
              borderBottomLeftRadius: '4px',
              borderTopLeftRadius: '4px',
              backgroundImage,
              boxShadow,
            })
          },
          Root: {
            style: ({ $theme }) => ({ ...style, })
          },
        }}
      >
        {children}
      </Checkbox>
    );
  }
}