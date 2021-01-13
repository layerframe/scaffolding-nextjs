/**
 * @file /contexts/{{name}}Context.js
 */
import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

// Create the context
const {{name}}Context = createContext([{}, () => {}]);

// Create the provider
const {{name}}Provider = (props) => {
  const {
    children = '',
  } = props

  const [someState, setSomeState] = useState({});

  return (
    <{{name}}Context.Provider value={[someState, setSomeState]}>
      {children}
    </{{name}}Context.Provider>
  )
}

{{name}}Provider.propTypes = {
  children: PropTypes.node,
}

export { {{name}}Context, {{name}}Provider }
