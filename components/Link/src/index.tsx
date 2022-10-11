import React from 'react';
import styles from './Link.css';

interface Props
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  target?: '_self' | '_blank' | '_parent' | '_top';
}

export const Link = (props: Props) => {
  return <a className={styles.link} {...props} />;
};

export default Link;
