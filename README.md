# NextJS Scaffolding
> Scaffolds aid in the creation of various components used throughout a production application. The following outlines the procedures required in order to use these custom scaffolds. 

## Scaffolding
> This project uses gulp as a task runner to handle scaffolding components in the app. See the `gulpfile.js`, `package.json` and the `bin` folder for more.

Scaffolding makes it easy to build consistent components that contain [Stories](https://storybook.js.org/) and [tests](https://jestjs.io/) for the application.

### Adding a basic stateless component

To build a component, run the following command.

1. `yarn component Test`

You'll see that the component is built based on the scaffold items found inside of `bin/scaffolding/stateless-component`. Note: `stateless-component` is connected via the file `scaffold-component.js`.

## Make a page

To build a page component, run the following command.

1. `yarn page tests`

## Extending

TODO: 