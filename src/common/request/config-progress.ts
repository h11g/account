import { instance } from './request'

export const configProgress = (startCallback: () => void, doneCallback: () => void): void => {
  instance.interceptors.request.use((config) => {
    startCallback()
    return config
  })

  instance.interceptors.response.use(
    (response) => {
      doneCallback()
      return response
    },
    (error) => {
      doneCallback()
      return Promise.reject(error)
    }
  )
}
