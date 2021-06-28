import React from 'react'
import { Menu, Space, Modal } from 'antd'
import Framework from './framework'
import { useLocation, Redirect, useHistory } from 'react-router-dom'
import { useAppSelector } from 'src/hooks'
import { isFullScreen } from 'common/service'
import AutoRouter from './components/auto_router'
import _ from 'lodash'
import { clearAuth } from 'common/request'
import { LogoutOutlined, MoneyCollectOutlined } from '@ant-design/icons'

enum MenuKeys {
  OVERVIEW = 'home',
  RECORD = 'record',
  ACCOUNT = 'account',
}

const App = () => {
  const { pathname } = useLocation()
  const history = useHistory()
  const userInfo = useAppSelector((state) => state.user.userInfo)

  const isFull = isFullScreen(pathname)

  const menus = [
    {
      key: MenuKeys.OVERVIEW,
      name: '概览',
    },
    {
      key: MenuKeys.RECORD,
      name: '记一笔',
    },
    {
      key: MenuKeys.ACCOUNT,
      name: '账户',
    },
  ]

  const handleLogout = () => {
    Modal.confirm({
      content: '是否退出登录',
      onOk() {
        clearAuth()
        history.replace('/login')
      },
    })
  }

  const handleMenuSelect = ({ key }: any) => {
    history.push(`/${key}`)
  }

  const renderHeader = (
    <div className='tw-flex tw-justify-between tw-items-center'>
      <MoneyCollectOutlined className='tw-text-primary' style={{ fontSize: 30 }} />
      <Menu mode='horizontal' defaultSelectedKeys={[MenuKeys.OVERVIEW]} onSelect={handleMenuSelect}>
        {_.map(menus, (menu) => (
          <Menu.Item key={menu.key}>{menu.name}</Menu.Item>
        ))}
      </Menu>

      <Space align='center'>
        {userInfo && (
          <>
            <span>{userInfo?.username}</span>
            <LogoutOutlined className='tw-text-4 tw-text-primary tw-cursor-pointer' onClick={handleLogout} />
          </>
        )}
      </Space>
    </div>
  )

  return (
    <Framework isFullScreen={isFull} header={renderHeader}>
      <AutoRouter>
        <Redirect exact from='/' to='/home' />
      </AutoRouter>
    </Framework>
  )
}

export default App
