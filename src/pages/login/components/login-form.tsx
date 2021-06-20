import React, { FC } from 'react'
import { Form, Input, Button } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

const FormItem = Form.Item

interface IProps {
  toRegist: () => void
}

const LoginForm: FC<IProps> = ({ toRegist }) => {
  const handleLogin = (values: any) => {
    console.log('%c [ values ]', 'font-size:13px; background:pink; color:#bf2c9f;', values)
  }

  return (
    <Form name='login' onFinish={handleLogin}>
      <FormItem
        name='username'
        rules={[
          {
            required: true,
            message: '请输入用户名',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder='请输入用户名' />
      </FormItem>
      <FormItem
        name='password'
        rules={[
          {
            required: true,
            message: '请输入你的密码',
          },
        ]}
        hasFeedback
      >
        <Input.Password prefix={<LockOutlined />} placeholder='请输入密码' />
      </FormItem>
      <FormItem>
        <Button type='primary' htmlType='submit' className='tw-w-full'>
          登录
        </Button>
        <div className='tw-flex tw-flex-row-reverse tw-pt-1'>
          <a onClick={toRegist}>立即注册</a>
        </div>
      </FormItem>
    </Form>
  )
}

export default LoginForm
