<div align="center">
  <h1>design-system</h1>
</div>

> A design system for design-system UI components, built on [@design-systems/cli](https://github.com/intuit/design-systems-cli).

## 👍 Philosophy

This is a design system intended for UI components currently being built or tested in design-system.

Included with this repo:

- Scaffolding for shared components and packages.
- Automatic CI/CD pipeline on circleCI.
  - PR canary builds to NPM (using auto).
  - Canary builds of Storybook (guides included in docs).
  - Accessibility audits.
  - Bundle size monitoring.
- An instance of the Storybook documentation site with custom plugins.
- Theme support.
- Advanced development using Typescript.

Components in this repository will ideally not clone functionality from other design systems, unless necessary for a time-boxed experiment.

## 🚀 Usage

To use a component from this repo you will first need to install the component into your project.

For an example we will try to use the `@design-system/card` component.

```sh
npm i @design-system/card
# or with yarn
yarn add @design-system/card
```

Then to use the component in your code just import it!

```js
import Card from '@design-system/card';
```

### :nail_care: CSS

To use the components you have to import the `css` files along with the components.

```js
import Card from '@design-system/card';
import '@design-system/card/dist/main.css';
```

Or you can use our babel preset to do this automatically for you.

First install the preset

```sh
npm i --save-dev @design-system/babel-preset
# or
yarn add -D @design-system/babel-preset
```

In your babel config add the following preset:

```json
{
  "presets": ["@design-system/babel-preset"]
}
```

Now whenever you import one of the `@design-system` components, `babel` will automatically include the correct CSS file!

## 🤝 Contributing

To create a new component:

```sh
yarn run create
```

Follow the prompts and you will have a new sub-package for your component!

```sh
# First link the package
yarn
# Then start developing
cd components/<Component Name>
yarn run dev
```

Before submitting a pull request ensure that all of the following work:

1. `yarn build`
2. `yarn lint`
3. `yarn test`

### How to use the `scripts`

Inside the package.json there are a bunch of scripts that this repo uses to run the project in development and to build the project.

Below you can read a description of scripts you should use while developing in this project.

- `yarn dev`: Builds everything and starts a storybook with all components
- `yarn test`: Run `jest` over the test files
- `yarn lint`: Lint all files using `eslint`
- `yarn clean`: Remove all dependencies, build files, and generated files from the project
- `yarn create`: Create a new components withing the repo
- `yarn create:package`: Create a new package withing the repo
- `yarn playroom`: Start a `playroom` with all of your components. This is where `.snippet` files are used
- `yarn size`: Determine how your changes effect the size of all sub-packages

#### Package Level `scripts`

Every command works at both the monorepo and package level. The means you can run some script from just the package/component for a faster development experience.

- `yarn dev`: Build any dependency in the monorepo the component depends on, and start a storybook with just the component
- `yarn test`: Test just the component
- `yarn lint`: Lint just the component
- `yarn clean`: Clean the generated files for just the component
- `yarn size`: Determine how your changes effect the size of the component
