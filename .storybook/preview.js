import { addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { contexts } from "./contexts";
export const parameters = {
  viewport: {
    viewports: {  ...MINIMAL_VIEWPORTS },
  },
};

addDecorator(withContexts(contexts));

