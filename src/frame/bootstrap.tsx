import React, { FC, useEffect } from 'react'
import { useAsyncFn } from 'react-use'
import { useLocation } from 'react-router-dom'
import { getUserInfo } from 'src/redux/user/reducer'
import { useAppDispatch } from 'src/hooks'

const Bootstrap: FC = ({ children }) => {
  const location = useLocation()

  const dispatch = useAppDispatch()
  useEffect(() => {
    if (location.pathname !== '/login' && location.pathname !== '/') {
      dispatch(getUserInfo())
    }
  }, [location.pathname])

  return <>{children}</>
}

export default Bootstrap
