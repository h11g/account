import React, { useState } from 'react'
import { Card, Row, Col } from 'antd'
import LoginForm from './components/login-form'

const Login = () => {
  const [isRegist, setRegist] = useState(false)

  return (
    <Row align='middle' justify='center'>
      <Col md={{ span: 8 }} lg={{ span: 6 }}>
        <Card>{isRegist ? null : <LoginForm />}</Card>
      </Col>
    </Row>
  )
}

export default Login
