import _ from 'lodash'
import { instance } from './request'
import Storage from 'common/storage'

let accessToken: string | undefined
let authInfo: { url: string; field: string } | undefined
const accessTokenKey = 'ACCESS_TOKEN_KEY'
const authInfoKey = 'AUTH_INTERFACE_KEY'

const initAuth = (url: string, field: string) => {
  authInfo = { url, field }
  Storage.set(authInfoKey, authInfo)

  instance.interceptors.request.use((config) => {
    if (!accessToken) {
      accessToken = Storage.get(accessTokenKey)
    }
    if (accessToken) {
      config.headers.authorization = accessToken
    }

    return config
  })

  instance.interceptors.response.use((response) => {
    const json = response.data
    const { url } = response.config

    if (authInfo?.url === url && authInfo?.field) {
      const accessToken = _.get(json, authInfo.field)
      if (accessToken && typeof accessToken === 'string') {
        Storage.set(accessTokenKey, accessToken)
      }
    }

    return response
  })
}

const clearAuth = () => {
  Storage.remove(accessTokenKey)
  accessToken = undefined
}

export { initAuth, clearAuth }
