import React, { useState } from 'react'
import { Form, Card, Row, Col, Input, Button } from 'antd'
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'

const FormItem = Form.Item

const LoginForm = () => {
  return (
    <Form name='login'>
      <FormItem>
        <Input prefix={<UserOutlined />} placeholder='请输入用户名' />
      </FormItem>
      <FormItem>
        <Input.Password prefix={<LockOutlined />} placeholder='请输入密码' />
      </FormItem>
      <FormItem>
        <Button type='primary' htmlType='submit' className='login-form-button'>
          登录
        </Button>
      </FormItem>
    </Form>
  )
}

export default LoginForm
