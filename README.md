# NextJS Scaffolding
> Scaffolds aid in the creation of various components used throughout a production application. The following outlines the procedures required in order to use these custom scaffolds.


# Getting started

1. `yarn add @layerframers/scaffolding-nextjs`
1. Update your `package.json` with the following. Point this to where files should be created.
```json
...
"directories": {
  "src": "."
},
...

```
1. `foldit -c MyComponent`

## What are scaffolds?

Scaffolding makes it easy to build consistent components that contain various dependencies i.e., [Stories](https://storybook.js.org/) and [tests](https://jestjs.io/) for the application.

### Adding a basic stateless component

To build a component, run the following command.

1. `fold component Test`

You'll see that the component is built based on the scaffold items found inside of `scaffolding/stateless-component`. Note: `stateless-component` is connected via the file `scaffold-component.js`.

## Make a page

To build a page component, run the following command.

1. `fold page tests`

## Extending

TODO:
