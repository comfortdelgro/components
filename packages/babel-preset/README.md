# @design-system/babel-preset

Automatically load the css for the @design-system design system.

## Installation

```sh
npm i --save-dev @design-system/babel-preset
# or
yarn add -D @design-system/babel-preset
```

## Usage

.babelrc:

```json
{
  "presets": ["@design-system/babel-preset"]
}
```

## Example

Input:

```js
import Card from '@design-system/card';
```

Output:

```js
import Card from '@design-system/card';
import '@design-system/card/dist/main.css';
```
