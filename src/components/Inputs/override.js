const override = ({
  disabled, error, isFocused,
  Root,
  Input,
  InputContainer,
}) => {

  const getInputBg = ($theme) => disabled ? $theme.disabledColors.inputBg : $theme.primaryColors.white;
  const getBorderColor = ($theme) =>(
    error
      ? disabled? $theme.outline10 : $theme.secondaryColors.red
      : isFocused ? $theme.primaryColors.blue : $theme.outline10
  );

  return {
    Root: Root || {
      style: ({ $theme }) => ({
          border: `2px solid ${getBorderColor($theme)} !important`,
          borderRadius: "8px",
          background: `${getInputBg($theme)} !important`,
          lineHeight: "125%",
        }),
    },
    InputContainer: InputContainer || {
      style: ({ $theme }) => ({
        border: "unset !important",
        background: 'transparent !important',
      }),
    },
    Input: Input || {
      style: ({ $theme }) => ({
        border: "unset !important",
        padding: "13px 16px",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "14px",
        color: $theme.secondaryColors.text,
        '::placeholder': {
          color: $theme.placeholderColor,
        }
      })
    }
  }
};

export default override;
