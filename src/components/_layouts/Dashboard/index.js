import React from 'react'
import PropTypes from 'prop-types'

function _Layout(props) {
  const { children } = props

  return <React.Fragment>{children}</React.Fragment>
}

_Layout.propTypes = {
  children: PropTypes.object.isRequired,
}

export default _Layout
