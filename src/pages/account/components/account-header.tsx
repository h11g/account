import React, { FC, useEffect, useState } from 'react'
import { Card, Row, Col, Statistic, Divider, Button } from 'antd'
import { useAppDispatch, useAppSelector } from 'src/hooks'
import _ from 'lodash'
import { Account } from 'src/types'
import { positiveColor, negativeColor, banlanceColor } from 'common/color'

interface IProps {
  accountId: string
}

const AccountHeader: FC<IProps> = ({ accountId }) => {
  const { accounts, accountGroups } = useAppSelector((state) => state.account)
  const [account, setCurrentAccount] = useState<Account>()

  useEffect(() => {
    const acc = _.find(accounts, (account) => account._id === accountId)
    setCurrentAccount(acc)
  }, [accountId])

  return (
    <Card bordered={false} title={account?.name} extra={<Button>添加账户</Button>} hoverable>
      <Row justify='center' align='middle' gutter={24}>
        <Col span={6}>
          <Statistic precision={2} title='余额' value={0} valueStyle={{ color: banlanceColor }} />
        </Col>
        <Col flex={1}>
          <Divider type='vertical' className='tw-h-6' />
        </Col>
        <Col span={6}>
          <Statistic precision={2} title='流入' value={0} valueStyle={{ color: positiveColor }} />
        </Col>
        <Col flex={1}>
          <Divider type='vertical' className='tw-h-6' />
        </Col>
        <Col span={6}>
          <Statistic precision={2} title='流出' value={0} valueStyle={{ color: negativeColor }} />
        </Col>
      </Row>
    </Card>
  )
}

export default AccountHeader
