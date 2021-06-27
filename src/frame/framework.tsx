import React, { FC } from 'react'
import { Layout } from 'antd'

interface IProps {
  isFullScreen?: boolean
}

const Header = Layout.Header
const Content = Layout.Content

const Framework: FC<IProps> = ({ children, isFullScreen }) => {
  return (
    <div>
      {isFullScreen ? (
        <Layout className='tw-h-screen'>{children}</Layout>
      ) : (
        <Layout className='tw-h-screen'>
          <Header className='tw-z-50 tw-w-full tw-fixed'>{}</Header>
          <Content style={{ padding: '0 50px', marginTop: 64 }}>{children}</Content>
        </Layout>
      )}
    </div>
  )
}

export default Framework
