import React from 'react'
import { Card, Row, Col, Statistic, Divider } from 'antd'

const AssetProfile = () => {
  return (
    <Card title='资产概况' bordered={false}>
      <Row justify='center' align='middle' gutter={24}>
        <Col span={6}>
          <Statistic precision={2} title='资产' value={3999} valueStyle={{ color: '#df5d45' }} />
        </Col>
        <Col flex={1}>
          <Divider type='vertical' className='tw-h-6' />
        </Col>
        <Col span={6}>
          <Statistic precision={2} title='负债' value={1999} valueStyle={{ color: '#56b68c' }} />
        </Col>
        <Col flex={1}>
          <Divider type='vertical' className='tw-h-6' />
        </Col>
        <Col span={6}>
          <Statistic precision={2} title='净资产' value={2000} valueStyle={{ color: '#312e2d' }} />
        </Col>
      </Row>
    </Card>
  )
}

export default AssetProfile
