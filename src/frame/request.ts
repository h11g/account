import { initAuth, configError, Response } from 'common/request'
import { AxiosResponse } from 'axios'
import { message } from 'antd'
import errorCode from 'common/error-code'
import { history } from 'common/service'

initAuth(['/mymoney/auth/login', '/mymoney/auth/regist'], 'access_token')

configError((msg, res?: AxiosResponse<Response<any>>) => {
  const code = res?.data.code

  // 未登录
  if (code === errorCode.AUTH_FAIL) {
    history.replace('/login')
  } else {
    message.error(msg)
  }
})
