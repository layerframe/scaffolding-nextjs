/**
 * @file {{name}}.js
 */
import * as React from 'react'
import PropTypes from 'prop-types'

import styles from './{{name}}.module.css'

const {{name}} = (props) => {
  const {
    tagName: Tag,
    className,
    variant,
    children,
  } = props

  return (
    <Tag className={`${styles.{{className}}} ${styles[`{{className}}__${variant}`]} ${className}`}>
      {children}
    </Tag>
  )
}

{{name}}.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

{{name}}.defaultProps = {
  tagName: 'div',
  className: '',
  variant: 'default',
  children: '',
}

export default {{name}}
