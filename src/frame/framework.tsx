import React, { FC, memo, HTMLAttributes } from 'react'
import { Layout, Menu } from 'antd'
import _ from 'lodash'

interface IProps extends HTMLAttributes<HTMLDivElement> {
  isFullScreen?: boolean
  menuList: { key: string; name: string }[]
}

const Header = Layout.Header
const Content = Layout.Content

const Framework: FC<IProps> = ({ children, isFullScreen, menuList }) => {
  return (
    <div>
      {isFullScreen ? (
        <Layout className='tw-h-screen'>{children}</Layout>
      ) : (
        <Layout className='tw-h-screen'>
          <Header className='tw-z-50 tw-w-full tw-fixed tw-bg-white'>
            {
              <Menu mode='horizontal' defaultSelectedKeys={[menuList[1].key]}>
                {_.map(menuList, (menu) => (
                  <Menu.Item key={menu.key}>{menu.name}</Menu.Item>
                ))}
              </Menu>
            }
          </Header>
          <Content style={{ padding: '0 50px', marginTop: 64 }}>{children}</Content>
        </Layout>
      )}
    </div>
  )
}

export default memo(Framework)
