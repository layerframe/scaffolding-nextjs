# NextJS Scaffolding
> Scaffolds aid in the creation of various components used throughout a production application. The following outlines the procedures required in order to use these custom scaffolds.


# Getting started

1. `yarn add @layerframers/scaffolding-nextjs`
1. Update your `package.json` with the following. Point src to where files should be created. The script will reference your base directory automatically, though.
```json
...
"directories": {
  "src": "."
},
...
"scripts": {
  ...
  "app": "foldit -app ",
  "component": "foldit -c ",
  "context": "foldit -x ",
  "api": "foldit -api ",
  "page": "foldit -p ",
  ...
}
```
1. Use it like `yarn component MyNewComponent` or like `./node_modules/.bin/foldit -c MyComponent`

## What are scaffolds?

Scaffolding makes it easy to build consistent components that contain various dependencies i.e., [Stories](https://storybook.js.org/) and [tests](https://jestjs.io/) for the application.

### Scaffolds
You can find all of the templates for the scaffolds inside of `scaffolding`. For example, `scaffold-component/*` files are connected via the file `scaffold-component.js`.

#### _app
- `./node_modules/.bin/foldit -app`

#### API components
- `./node_modules/.bin/foldit -api `

#### Component
- `./node_modules/.bin/foldit -c Test`

#### Context
- `./node_modules/.bin/foldit -x Test`

#### Pages
- `./node_modules/.bin/foldit -p tests`

#### Storybook Stories
- `./node_modules/.bin/foldit -s MyStory`

## Extending

TODO:
