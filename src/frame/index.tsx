import React from 'react'
import { HashRouter as Router, Redirect } from 'react-router-dom'
import AutoRouter from './components/auto_router'

const Root = () => (
  <Router>
    <AutoRouter>
      <Redirect exact from='/' to='/home' />
    </AutoRouter>
  </Router>
)

export default Root
