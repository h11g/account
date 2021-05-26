import React from 'react'
import './style.scss'
import Icon from 'svg/icon.svg'

interface IProps {
  name: string
}

function App(props: IProps): JSX.Element {
  const { name } = props
  return (
    <div className='app'>
      <Icon className='icon' />
      <span>{`Hello! ${name}`}</span>
    </div>
  )
}

export default App
