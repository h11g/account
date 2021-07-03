import React from 'react'
import { Card, Table } from 'antd'

const AccountDetail = () => {
  const column = [
    {
      title: '时间',
      key: 'time',
    },
    {
      title: '金额',
      key: 'amount',
    },
  ]
  return (
    <Card hoverable bordered={false}>
      <Table columns={column} />
    </Card>
  )
}

export default AccountDetail
