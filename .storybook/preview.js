import { addParameters } from "@storybook/react";
import { addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";

addParameters({
  showPanel: true,
  panelPosition: "bottom",
});

addDecorator(withContexts(contexts));
