import React from 'react';

import {
  EmptyState,
  InternalServerError as LocalInternalServerError,
  NotFoundError as LocalNotFoundError,
  UnauthorizedError as LocalUnauthorizedError
} from '.';

export default {
  title: 'Components/State'
  // parameters: { notes }
};

export const Empty = () => <EmptyState />;
export const InternalServerError = () => <LocalInternalServerError />;
export const NotFoundError = () => <LocalNotFoundError />;
export const UnauthorizedError = () => <LocalUnauthorizedError />;
