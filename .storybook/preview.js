import { addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { contexts } from "./contexts";
console.debug('INITIAL_VIEWPORTS: ', INITIAL_VIEWPORTS);
export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphonex',
  },
};

addDecorator(withContexts(contexts));

