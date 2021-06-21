import { initAuth, configError, Response } from 'common/request'
import { AxiosResponse } from 'axios'
import { message } from 'antd'

initAuth('/mymoney/auth/login', 'access_token')

configError((msg, res?: AxiosResponse<Response<any>>) => {
  const code = res?.data.code

  // 未登录
  if(code === 9999) {

  } else {
    message.error(msg)
  }
})
