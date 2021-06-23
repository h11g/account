import React, { FC, useEffect } from 'react'
import { useAsyncFn } from 'react-use'
import { Spin } from 'antd'
import { getUserInfoSuccess } from 'src/redux/user/reducer'
import { useAppDispatch } from 'src/hooks'
import { fetchUserInfo } from 'src/api/user'

const Bootstrap: FC = ({ children }) => {
  const dispatch = useAppDispatch()
  const [state, doFetch] = useAsyncFn(async () => {
    const user = await fetchUserInfo()
    return user
  })

  useEffect(() => {
    doFetch().then((res) => {
      dispatch(getUserInfoSuccess(res.data))
    })
  }, [])

  if (state.loading) {
    return (
      <Spin tip='正在加载' delay={300}>
        <div className='tw-h-screen tw-w-screen' />
      </Spin>
    )
  }

  return <>{children}</>
}

export default Bootstrap
