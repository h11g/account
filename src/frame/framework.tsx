import React, { FC, memo, HTMLAttributes, ReactNode } from 'react'
import { Layout } from 'antd'

interface IProps extends HTMLAttributes<HTMLDivElement> {
  isFullScreen?: boolean
  header: ReactNode
}

const Header = Layout.Header
const Content = Layout.Content
const Footer = Layout.Footer

const Framework: FC<IProps> = ({ children, isFullScreen, header }) => {
  return (
    <div>
      {isFullScreen ? (
        <Layout className='tw-h-screen'>{children}</Layout>
      ) : (
        <Layout className='tw-h-screen'>
          <Header className='tw-z-50 tw-w-full tw-fixed tw-bg-white'>{header}</Header>
          <Content className='' style={{ padding: '0 100px', marginTop: 64 }}>
            <div className='tw-bg-white tw-p-4 tw-mt-4 tw-min-h-full'>{children}</div>
          </Content>
          <Footer className='tw-text-center'>账本 ©2021 Created by h11g</Footer>
        </Layout>
      )}
    </div>
  )
}

export default memo(Framework)
