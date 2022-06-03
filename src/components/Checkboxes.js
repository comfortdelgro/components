/* eslint-disable import/no-anonymous-default-export */
import * as React from "react";
import {
  Checkbox as BaseCheckbox,
  LABEL_PLACEMENT
} from "baseui/checkbox";
import { defaultTheme as theme } from '../utils';

// TODO:: refactor cleaner overrides design if team confirmed baseweb as foundation.

// TODO: centralized types declaration pattern for all components
export const CHECK_BOX_TYPES = {
  PRIMARY: 'primary',
};

// TODO:: Refactor as an Icon class ( else fontawesome ? )
const MarkIconWhite = 'url("data:image/svg+xml,%0A%20%20%20%20%3Csvg%20width%3D%2217%22%20height%3D%2213%22%20viewBox%3D%220%200%2017%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%20%20%3Cpath%20d%3D%22M6.50002%2012.6L0.400024%206.60002L2.60002%204.40002L6.50002%208.40002L13.9%200.900024L16.1%203.10002L6.50002%2012.6Z%22%20fill%3D%22%23FFFFFF%22%2F%3E%0A%20%20%20%20%3C%2Fsvg%3E%0A%20%20")';

export class Checkbox extends React.Component {
  render() {
    const { type, checked, onChecked, style, disabled, children, ...rest } = this.props;

    let borderColor = theme.outline;
    let backgroundColor = theme.primaryColors.white;
    let backgroundImage = 'unset';
    let boxShadow = 'unset';

    switch (true) {
      case (disabled):
        borderColor = backgroundColor = theme.disabledColors.control;
        if (checked) backgroundImage = MarkIconWhite;
        break;
      case (checked):
        borderColor = backgroundColor = theme.primaryColors.blue;
        backgroundImage = MarkIconWhite;
        break;
      default:
        //
        break;
    }

    return (
      <BaseCheckbox
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
              borderTopRightRadius: '3px',
              borderBottomRightRadius: '3px',
              borderBottomLeftRadius: '3px',
              borderTopLeftRadius: '3px',
              backgroundImage,
              boxShadow,
              ':focus': {
                borderTopColor: theme.secondaryColors.linkBlue,
                borderRightColor: theme.secondaryColors.linkBlue,
                borderBottomColor: theme.secondaryColors.linkBlue,
                borderLeftColor: theme.secondaryColors.linkBlue,
              },
              ':hover': checked ? {} : {
                background: theme.secondaryColors.linkBlue,
                borderTopColor: theme.secondaryColors.linkBlue,
                borderRightColor: theme.secondaryColors.linkBlue,
                borderBottomColor: theme.secondaryColors.linkBlue,
                borderLeftColor: theme.secondaryColors.linkBlue,
              },
            })
          },
          Root: {
            style: ({ $theme }) => ({ 
              ...style, 
            })
          },
        }}
        {...rest}>
        {children}
      </BaseCheckbox>
    );
  }
}