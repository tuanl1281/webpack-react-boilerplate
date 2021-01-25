import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { RouterConfig } from './routes'
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    )
  }
}

export default App
