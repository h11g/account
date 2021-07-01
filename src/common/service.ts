import { createHashHistory } from 'history'
import _ from 'lodash'
import { matchPath } from 'react-router-dom'

export const history = createHashHistory()

const fullScreenPaths = ['/login']

const fullScreenCache: { [id: string]: boolean } = {}

export const isFullScreen = (pathname: string): boolean => {
  if (fullScreenCache[pathname]) {
    return true
  }
  return !!_.find(fullScreenPaths, (v) => {
    if (matchPath(pathname, { path: v })) {
      fullScreenCache[pathname] = true
      return true
    }
    return false
  })
}
