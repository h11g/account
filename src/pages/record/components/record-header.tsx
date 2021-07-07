import React, { useState, ReactNode } from 'react'
import { Card } from 'antd'
import IncomeForm from './income-form'
import OutlayForm from './outlay-form'
import TransferForm from './transfer-form'

enum TabType {
  OUTLAY = 'outlay',
  INCOME = 'income',
  TRANSFER = 'transfer',
}

const RecordHeader = () => {
  const [currentKey, setKey] = useState<TabType>(TabType.OUTLAY)

  const tabList = [
    {
      key: TabType.OUTLAY,
      tab: '支出',
    },
    {
      key: TabType.INCOME,
      tab: '收入',
    },
    {
      key: TabType.TRANSFER,
      tab: '转账',
    },
  ]

  const contentList: { [key in TabType]: ReactNode } = {
    [TabType.OUTLAY]: <OutlayForm />,
    [TabType.INCOME]: <IncomeForm />,
    [TabType.TRANSFER]: <TransferForm />,
  }

  return (
    <Card
      hoverable
      className='tw-shadow-sm'
      tabList={tabList}
      onTabChange={(key) => {
        setKey(key as TabType)
      }}
    >
      {contentList[currentKey]}
    </Card>
  )
}

export default RecordHeader
