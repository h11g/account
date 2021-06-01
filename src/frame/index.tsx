import React from 'react'
import { HashRouter as Router, Redirect } from 'react-router-dom'
import AutoRouter from './components/auto_router'
import { Provider } from 'react-redux'
import store from 'src/redux/root_store'
import 'src/css/index.scss'

const Root = () => (
  <Provider store={store}>
    <Router>
      <AutoRouter>
        <Redirect exact from='/' to='/home' />
      </AutoRouter>
    </Router>
  </Provider>
)

export default Root
