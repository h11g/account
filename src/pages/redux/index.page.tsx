import React from 'react'
import Header from './header'
import Content from './content'
import classNames from 'classnames'
import { useAppSelector } from 'src/hooks'
import { ThemeType } from 'src/types'

const ReduxDemo = () => {
  const theme = useAppSelector((state) => state.theme.value)

  return (
    <div
      className={classNames({
        'default-theme': theme === ThemeType.DEFAULT,
        'dark-theme': theme === ThemeType.DARK,
      })}
    >
      <Header />
      <Content />
    </div>
  )
}

export default ReduxDemo
