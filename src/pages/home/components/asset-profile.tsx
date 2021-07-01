import React from 'react'
import { Card, Row, Col, Statistic, Divider } from 'antd'
import _ from 'lodash'
import { useAppSelector } from 'src/hooks'
import { Account } from 'src/types'
import Big from 'big.js'
import { positiveColor, negativeColor } from 'common/color'

const AssetProfile = () => {
  const accounts = useAppSelector((state) => state.account.accounts)

  // const assetAccount = _.filter(accounts, (account) => account.type !== AccountType.CREDIT_CARD)
  // const liabilityAccount = _.filter(accounts, (account) => account.type === AccountType.CREDIT_CARD)
  const assetAccount = _.filter(accounts, (account) => account.type !== '')
  const liabilityAccount = _.filter(accounts, (account) => account.type === '')

  const getAccountsBalance = (accounts: Account[]) => {
    return _.reduce(
      accounts,
      (pre, current) => {
        return Big(pre).add(current.balance).toNumber()
      },
      0
    )
  }

  const total = getAccountsBalance(assetAccount)
  const liabilities = getAccountsBalance(liabilityAccount)
  const netAsset = Big(total).sub(liabilities).toNumber()

  return (
    <Card title='资产概况' bordered={false}>
      <Row justify='center' align='middle' gutter={24}>
        <Col span={6}>
          <Statistic precision={2} title='资产' value={total} valueStyle={{ color: positiveColor }} />
        </Col>
        <Col flex={1}>
          <Divider type='vertical' className='tw-h-6' />
        </Col>
        <Col span={6}>
          <Statistic precision={2} title='负债' value={liabilities} valueStyle={{ color: negativeColor }} />
        </Col>
        <Col flex={1}>
          <Divider type='vertical' className='tw-h-6' />
        </Col>
        <Col span={6}>
          <Statistic precision={2} title='净资产' value={+netAsset} valueStyle={{ color: '#312e2d' }} />
        </Col>
      </Row>
    </Card>
  )
}

export default AssetProfile
