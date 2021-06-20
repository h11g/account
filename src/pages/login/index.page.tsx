import React from 'react'
import { Card, Row, Col } from 'antd'
import { useBoolean } from 'react-use'
import LoginForm from './components/login-form'
import RegistForm from './components/regist-form'

const Login = () => {
  const [isRegist, toogleRegist] = useBoolean(false)

  const handleToRegist = () => {
    toogleRegist()
  }

  return (
    <Row align='middle' justify='center'>
      <Col md={{ span: 8 }} lg={{ span: 6 }}>
        <Card>{isRegist ? <RegistForm toLogin={handleToRegist} /> : <LoginForm toRegist={handleToRegist} />}</Card>
      </Col>
    </Row>
  )
}

export default Login
