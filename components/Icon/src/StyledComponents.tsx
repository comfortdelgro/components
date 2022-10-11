import * as React from 'react';
import styles from './Icon.css';

export interface StyledSvgProps extends React.SVGProps<SVGElement> {
  children: React.ReactNode;
}

export const StyledSvg: React.FC<StyledSvgProps> = ({ children }) => (
  <svg className={styles.svgIcon}>{children}</svg>
);
StyledSvg.displayName = 'StyledSvg';
