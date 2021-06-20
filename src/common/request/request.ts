import axios, { AxiosRequestConfig } from 'axios'
import { requestTrim, httpResolve } from './util'
import { Response } from './types'

const instance = axios.create({
  timeout: 3000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Timeout': '3000',
    'X-Success-Code': '0',
  },
})

class RequestBase<Data> {
  private _config: AxiosRequestConfig
  private _sucCode = [0]
  private _data = {}

  constructor(url: string, config?: AxiosRequestConfig) {
    this._config = {
      url,
      headers: {},
      ...config,
    }
  }

  public code(codes: number[]): RequestBase<Data> {
    this._sucCode = this._sucCode.concat(codes)
    this._config.headers['X-Success-Code'] = this._sucCode.join(',')
    return this
  }

  public timeout(timeout: number): RequestBase<Data> {
    this._config.timeout = timeout
    this._config.headers['X-Timeout'] = `${timeout}`
    return this
  }

  public data(data: { [key: string]: any }): RequestBase<Data> {
    // requestTrim 剔除前后多余空格
    this._data = JSON.stringify(requestTrim(data))
    return this
  }

  public get(): Promise<Response<Data>> {
    this._config.data = this._data
    this._config.method = 'GET'
    return instance.request<Response<Data>>(this._config).then((res) => httpResolve(res, this._sucCode))
  }

  public post(): Promise<Response<Data>> {
    this._config.data = this._data
    this._config.method = 'POST'
    return instance.request<Response<Data>>(this._config).then((res) => httpResolve(res, this._sucCode))
  }
}

function Request<Data>(url: string, config?: AxiosRequestConfig): RequestBase<Data> {
  return new RequestBase<Data>(url, config)
}

export { instance, Request }
