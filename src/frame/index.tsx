import React from 'react'
import { HashRouter as Router, Redirect } from 'react-router-dom'
import AutoRouter from './components/auto_router'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import store from 'src/redux/root_store'

import 'src/css/index.less'
import 'antd/dist/antd.less'

const Root = () => (
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <Router>
        <AutoRouter>
          <Redirect exact from='/' to='/home' />
        </AutoRouter>
      </Router>
    </ConfigProvider>
  </Provider>
)

export default Root
