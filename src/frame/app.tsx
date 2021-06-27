import React from 'react'
import Framework from './framework'
import { useLocation, Redirect } from 'react-router-dom'
import { isFullScreen } from 'common/service'
import AutoRouter from './components/auto_router'

const App = () => {
  const { pathname } = useLocation()

  const isFull = isFullScreen(pathname)

  return (
    <Framework isFullScreen={isFull}>
      <AutoRouter>
        <Redirect exact from='/' to='/home' />
      </AutoRouter>
    </Framework>
  )
}

export default App
