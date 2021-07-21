/**
 * {{name}}.jsx
 */
 import * as React from 'react';

 // Component(s)
 import {{name}} from './{{name}}';

 export default {
   title: '{{name}}',
   component: {{name}},
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <{{name}} />;

 Default.storyName = 'default';
