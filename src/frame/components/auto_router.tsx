import React, { FC, ComponentType, memo } from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router-dom'
import _ from 'lodash'
import loadable from '@loadable/component'
import Loading from './loading'
import NoMatch from './no_match'

interface RouteBaseProps {
  path: string
  loader: () => Promise<ComponentType<RouteComponentProps>>
}

export interface AutoRouterProps {
  noMatch?: ComponentType<RouteComponentProps>
  loading?: JSX.Element
  children?: React.ReactElement
}

// 需要配置 webpack 的 resolve alias
const req = require.context('src/pages', true, /index.page./, 'lazy')

const generateRouteList = () => {
  const routeList: RouteBaseProps[] = []

  _.forEach(req.keys(), (key) => {
    const pathArr = key.slice(1).split('/').slice(0, -1)

    routeList.push({
      path: pathArr.join('/'),
      loader: () => Promise.resolve(req(key)),
    })
  })

  return routeList
}

const getRouteList = (loading?: JSX.Element) => {
  const routeList = generateRouteList()

  const RouteComList: JSX.Element[] = []
  _.forEach(routeList, (v) => {
    const route = <Route key={v.path} exact path={v.path} component={loadable(v.loader, { fallback: loading })} />

    RouteComList.push(route)
  })

  return RouteComList
}

const AutoRouter: FC<AutoRouterProps> = ({ children, noMatch = NoMatch, loading = <Loading /> }) => {
  return (
    <Switch>
      {children}
      {getRouteList(loading)}
      <Route exact component={noMatch} />
    </Switch>
  )
}

export default memo(AutoRouter)
