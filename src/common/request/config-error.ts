import { instance } from './request'
import { getErrorMessage } from './util'

const configError = (errorCallback: (msg: string, res?: any) => void) => {
  instance.interceptors.response.use(
    (response) => {
      const sucCode: string[] = response.config.headers['X-Success-Code']?.split(',') || ['0']

      const json = response.data

      if (!sucCode.includes(json.code + '')) {
        const msg = json.msg || '未知错误'
        errorCallback(msg, response)
      }
      return response
    },
    (error) => {
      errorCallback(getErrorMessage(error))
      return Promise.reject(error)
    }
  )
}

export { configError }
