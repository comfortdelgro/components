import * as React from 'react';
import styles from './Footer.css';

export enum FooterKind {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary'
}

export interface FooterProps {
  kind?: FooterKind;
  children: React.ReactNode;
}

/** A simple component. */
export const Footer = ({
  kind = FooterKind.Primary,
  children
}: FooterProps) => (
  <div className={`${styles.base} ${styles[kind]}`}>{children}</div>
);
Footer.displayName = 'Footer';
