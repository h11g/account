import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import store from 'src/redux/root_store'
import Bootstrap from './bootstrap'
import App from './app'

import 'antd/dist/antd.less'
import 'src/css/index.less'

import './request'

const Root = () => (
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <Router>
        <Bootstrap>
          <App />
        </Bootstrap>
      </Router>
    </ConfigProvider>
  </Provider>
)

export default Root
