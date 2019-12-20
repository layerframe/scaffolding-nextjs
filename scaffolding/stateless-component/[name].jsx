/**
 * @file {{name}}.js
 */
import * as React from 'react'
import PropTypes from 'prop-types'

const {{name}} = (props) => {
  const {
    tagName: Tag,
    className,
    variant,
    children,
  } = props

  return (
    <Tag className={`{{className}} {{className}}--${variant} ${className}`}>
      {children}
      <style jsx>{`
        .{{className}} {

        }
      `}</style>
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
