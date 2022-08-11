import {withContexts} from '@storybook/addon-contexts/react'
import {MINIMAL_VIEWPORTS} from '@storybook/addon-viewport'
import {addDecorator} from '@storybook/react'
import {contexts} from './contexts'
export const parameters = {
  viewport: {
    viewports: {...MINIMAL_VIEWPORTS},
  },
}

// @ts-ignore
addDecorator(withContexts(contexts))
