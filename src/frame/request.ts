import QProgress from 'qier-progress'
import { initAuth, configError, Response, configProgress } from 'common/request'
import { AxiosResponse } from 'axios'
import { message } from 'antd'
import { history } from 'common/service'

initAuth(['/mymoney/auth/login', '/mymoney/auth/regist'], 'access_token')

const qprogress = new QProgress()

configProgress(
  () => {
    qprogress.start()
  },
  () => {
    qprogress.finish()
  }
)

configError((msg, res?: AxiosResponse<Response<any>>) => {
  const code = res?.status
  message.error(msg)

  // 未登录
  if (code === 401) {
    history.replace('/login')
  }
})
