import { initAuth, configError, Response } from 'common/request'
import { AxiosResponse } from 'axios'
import { message } from 'antd'
import { history } from 'common/service'

initAuth(['/mymoney/auth/login', '/mymoney/auth/regist'], 'access_token')

configError((msg, res?: AxiosResponse<Response<any>>) => {
  const code = res?.status
  message.info('hello', 60)

  // 未登录
  if (code === 401) {
    history.replace('/login')
  }
})
