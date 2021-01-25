import React from 'react'
import PropTypes from 'prop-types'

function Layout({ children }) {
  return <React.Fragment>{children}</React.Fragment>
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Layout
