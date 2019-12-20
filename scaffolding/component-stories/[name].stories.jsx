/**
 * {{name}}.jsx
 */
import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

// Mocks/Utils
import { StorybookRouter } from '../../mocks/next/router'

// Component(s)
import {{name}} from './{{name}}';

// Styles
const styles = {
  marginTop: '10%',
  textAlign: 'center',
};

// Generate some stub properties
// generateProps.init()
// const props = generateProps({{name}});

// Decorators
const CenterDecorator = storyFn => (
  <div style={styles}>
    { storyFn() }
  </div>
);

const RouterDecorator = (storyFn) => (
  <StorybookRouter>{storyFn()}</StorybookRouter>
)

storiesOf('{{name}}', module)
  .addDecorator(RouterDecorator)
  .addDecorator(CenterDecorator)
  .add('with required props', () => (
    <{{name}} {...props} />
  ));
