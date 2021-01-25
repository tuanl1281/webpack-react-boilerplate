import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Layout
import LayoutDefault from '../components/_layouts/Default'

// Page
import Home from '../pages/Home'

export function RouterConfig() {
  return (
    <Switch>
      <Route exact path="/" layout={LayoutDefault} component={Home} />

      {/* <PrivateRoute path="/product" layout={LayoutDashboard} component={Home} /> */}
    </Switch>
  )
}
