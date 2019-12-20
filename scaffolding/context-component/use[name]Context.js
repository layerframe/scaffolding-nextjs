/**
 * @file contexts/{{name}}Context/use{{name}}.js
 */
import { useContext } from 'react';
import { {{name}}Context } from './{{name}}Context';

const use{{name}} = () => {
  const [someState, setSomeState] = useContext({{name}}Context);

  // Just return the state
  const someHelper = someState.isAlive ? someState.isAlive : ''

  // Make them public
  return {
    someHelper,
  }
};

export default use{{name}};
