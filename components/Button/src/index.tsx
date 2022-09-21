import React from 'react';
import styles from './Button.css';

export enum ButtonSize {
  Large = 'large',
  Md = 'md',
  Sm = 'sm'
}

export enum ButtonKind {
  Primary = 'primary',
  Secondary = 'secondary',
  Negative = 'negative',
  Tertiary = 'tertiary'
}

export interface BaseButtonProps {
  /** The value for the component to display */
  value?: string;
  size?: ButtonSize;
  kind?: ButtonKind;
  children?: string;
}

/** A simple component. */
export const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ value, size, kind, ...delegated }, ref) => {
    let className = styles.base;
    if (kind) className += ` ${styles[kind]}`;
    if (size) className += ` ${styles[size]}`;
    return <button ref={ref} className={className} {...delegated} />;
  }
);
BaseButton.displayName = 'BaseButton';

export type ButtonProps = Omit<BaseButtonProps, 'kind'>;

export const PrimaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...delegated }, ref) => {
    return <BaseButton ref={ref} kind={ButtonKind.Primary} {...delegated} />;
  }
);
PrimaryButton.displayName = 'PrimaryButton';

export const SecondaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...delegated }, ref) => {
    return <BaseButton ref={ref} kind={ButtonKind.Secondary} {...delegated} />;
  }
);
SecondaryButton.displayName = 'SecondaryButton';

export const NegativeButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...delegated }, ref) => {
    return <BaseButton ref={ref} kind={ButtonKind.Negative} {...delegated} />;
  }
);
NegativeButton.displayName = 'NegativeButton';

export const TertiaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...delegated }, ref) => {
    return <BaseButton ref={ref} kind={ButtonKind.Tertiary} {...delegated} />;
  }
);
TertiaryButton.displayName = 'TertiaryButton';
