import React, { useState } from 'react'
import { Form, Card, Row, Col, Input, Button } from 'antd'
import LoginForm from './components/login-form'
import './style.less'

const Login = () => {
  const [isRegist, setRegist] = useState(false)

  return (
    <Row align='middle' justify='center'>
      <Col span={6}>
        <Card>{isRegist ? null : <LoginForm />}</Card>
      </Col>
    </Row>
  )
}

export default Login
