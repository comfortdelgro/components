import React from 'react';
import styles from './State.css';
import {
  EmptyStateIcon,
  InternalServerErrorIcon,
  NotFoundErrorIcon,
  UnauthorizedErrorIcon
} from '../../Icon';

export interface Props {
  /** The value for the component to display */
  msg?: string;
  width?: number | string | undefined;
  height?: number | string | undefined;
}

/** A simple component. */
export const EmptyState = ({
  msg = 'Nothing here/No Image',
  width,
  height
}: Props) => (
  <div
    className={styles.base}
    style={{
      width: width,
      height: height
    }}
  >
    <EmptyStateIcon width="100%" height="100%" />
    <div className={styles.emptyContent}>{msg}</div>
  </div>
);
EmptyState.displayName = 'EmptyState';

export const InternalServerError = ({
  msg = `The server encountered an internal error or \nmisconfiguration and was unable to \ncomplete your request.`,
  width,
  height
}: Props) => (
  <div
    className={styles.base}
    style={{
      width: width,
      height: height
    }}
  >
    <InternalServerErrorIcon width="100%" height="100%" />
    <div className={styles.emptyContent}>{msg}</div>
  </div>
);
InternalServerError.displayName = 'InternalServerError';

export const NotFoundError = ({
  msg = `The server encountered an internal error or \nmisconfiguration and was unable to \ncomplete your request.`,
  width,
  height
}: Props) => (
  <div
    className={styles.base}
    style={{
      width: width,
      height: height
    }}
  >
    <NotFoundErrorIcon width="100%" height="100%" />
    <div className={styles.emptyContent}>{msg}</div>
  </div>
);
NotFoundError.displayName = 'NotFoundError';

export const UnauthorizedError = ({
  msg = `The server encountered an internal error or \nmisconfiguration and was unable to \ncomplete your request.`,
  width,
  height
}: Props) => (
  <div
    className={styles.base}
    style={{
      width: width,
      height: height
    }}
  >
    <UnauthorizedErrorIcon width="100%" height="100%" />
    <div className={styles.emptyContent}>{msg}</div>
  </div>
);
UnauthorizedError.displayName = 'UnauthorizedError';
