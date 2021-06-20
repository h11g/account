import React, { FC } from 'react'
import { Form, Input, Button } from 'antd'
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'

const FormItem = Form.Item

interface IProps {
  toLogin: () => void
}

const RegistForm: FC<IProps> = ({ toLogin }) => {
  const handleRegist = (values: any) => {
    console.log('%c [ values ]', 'font-size:13px; background:pink; color:#bf2c9f;', values)
  }

  return (
    <Form name='regist' onFinish={handleRegist}>
      <FormItem
        name='email'
        rules={[
          {
            type: 'email',
            message: '邮箱格式错误',
          },
          {
            required: true,
            message: '请输入注册邮箱',
          },
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder='请输入邮箱' />
      </FormItem>
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
      <FormItem
        name='confirm'
        dependencies={['password']}
        rules={[
          {
            required: true,
            message: '密码不一致',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject(new Error('密码不一致'))
            },
          }),
        ]}
        hasFeedback
      >
        <Input.Password prefix={<LockOutlined />} placeholder='再次确认密码' />
      </FormItem>
      <FormItem>
        <Button type='primary' htmlType='submit' className='tw-w-full'>
          注册
        </Button>
        <div className='tw-flex tw-flex-row-reverse tw-pt-1'>
          <a onClick={toLogin}>马上登录</a>
        </div>
      </FormItem>
    </Form>
  )
}

export default RegistForm
