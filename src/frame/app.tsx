import React from 'react'
import Framework from './framework'
import { useLocation, Redirect } from 'react-router-dom'
import { isFullScreen } from 'common/service'
import AutoRouter from './components/auto_router'

const App = () => {
  const { pathname } = useLocation()

  const isFull = isFullScreen(pathname)

  const menus = [
    {
      key: 'overview',
      name: '概览',
    },
    {
      key: 'record',
      name: '记一笔',
    },
    {
      key: 'account',
      name: '账户',
    },
  ]

  return (
    <Framework isFullScreen={isFull} menuList={menus}>
      <AutoRouter>
        <Redirect exact from='/' to='/home' />
      </AutoRouter>
    </Framework>
  )
}

export default App
