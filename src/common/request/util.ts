import _ from 'lodash'
import { AxiosResponse } from 'axios'
import { Response } from './types'

function tailRequestTrim(obj: { [key: string]: any }, result: { [key: string]: any }) {
  _.forEach(Object.entries(obj), ([n, v]) => {
    if (v instanceof Object && !_.isArray(v)) {
      result[n] = {}
      tailRequestTrim(v, result[n])
    } else {
      result[n] = typeof v === 'string' ? v.trim() : v
    }
  })

  return result
}

function requestTrim(obj: { [key: string]: any }) {
  // 判断一下循环引用，如果有就抛错误
  JSON.stringify(obj)

  return tailRequestTrim(obj, {})
}

function httpResolve<T>(response: AxiosResponse<Response<T>>, sucCode: number[]): Response<T> {
  const json = response.data
  if (!sucCode.includes(json.code)) {
    throw new Error(json.msg || '未知错误')
  }

  return json
}

function getErrorMessage(error: { [key: string]: any }): string {
  let message
  if (error.response) {
    message = `${error.response.data?.msg}`
  } else if (error.request) {
    if (error.message && error.message.includes('timeout')) {
      message = '连接超时'
    } else {
      message = '服务器错误'
    }
  } else {
    message = error.message
  }

  return message
}

export { tailRequestTrim, requestTrim, httpResolve, getErrorMessage }
