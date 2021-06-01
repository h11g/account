import React from 'react'
import { useAppDispatch } from 'src/hooks'
import { changeTheme } from 'src/redux/theme/reducer'
import { ThemeType } from 'src/types'

const ThemeSwitch = () => {
  const dispatch = useAppDispatch()
  const handleChangeTheme = (theme: ThemeType) => {
    dispatch(changeTheme(theme))
  }

  return (
    <div>
      <button onClick={() => handleChangeTheme(ThemeType.DEFAULT)}>Default</button>
      <button onClick={() => handleChangeTheme(ThemeType.DARK)}>Dark</button>
    </div>
  )
}

export default ThemeSwitch
