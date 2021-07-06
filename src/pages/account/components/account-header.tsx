import React, { FC, useEffect, useState } from 'react'
import { Card, Row, Col, Statistic, Divider, Dropdown, Menu, Modal } from 'antd'
import { DownOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { useAppSelector, useAppDispatch } from 'src/hooks'
import _ from 'lodash'
import { Account } from 'src/types'
import { positiveColor, negativeColor, banlanceColor } from 'common/color'
import { showModal } from 'src/redux/global-modal/reducer'
import { deleteAccount } from 'src/redux/account/reducer'
import AccountModifyForm from './account-modify-form'

interface IProps {
  accountId: string
}

enum MenuType {
  EDIT = 'edit',
  DELETE = 'delete',
}

const AccountHeader: FC<IProps> = ({ accountId }) => {
  const dispatch = useAppDispatch()
  const { accountMapById } = useAppSelector((state) => state.account)
  const [account, setCurrentAccount] = useState<Account>()

  useEffect(() => {
    setCurrentAccount(accountMapById[accountId])
  }, [accountId, accountMapById])

  const handleCreateAccount = () => {
    dispatch(
      showModal({
        title: '新建账户',
        content: <AccountModifyForm currentGroupId={account?.group as string} />,
        footer: null,
      })
    )
  }

  const handleMenuItemClick = ({ key }: any) => {
    switch (key as MenuType) {
      case MenuType.EDIT:
        dispatch(
          showModal({
            title: '修改账户',
            content: <AccountModifyForm currentGroupId={account?.group as string} account={account} type='edit' />,
            footer: null,
          })
        )
        break
      case MenuType.DELETE:
        Modal.confirm({
          title: '提示',
          onOk: () => {
            dispatch(deleteAccount(accountId))
          },
          content: `账户「${account?.name}」将被删除`,
          okButtonProps: { danger: true },
          maskClosable: true,
        })
        break
      default:
        break
    }
  }

  const menu = (
    <Menu onClick={handleMenuItemClick}>
      <Menu.Item key={MenuType.EDIT} icon={<EditOutlined />}>
        修改账户
      </Menu.Item>
      <Menu.Item danger key={MenuType.DELETE} icon={<DeleteOutlined />}>
        删除账户
      </Menu.Item>
    </Menu>
  )

  return (
    <Card
      hoverable
      bordered={false}
      title={account?.name}
      extra={
        <Dropdown.Button
          trigger={['click']}
          type='primary'
          overlay={menu}
          icon={<DownOutlined />}
          onClick={handleCreateAccount}
        >
          添加账户
        </Dropdown.Button>
      }
    >
      <Row justify='center' align='middle' gutter={24}>
        <Col span={6}>
          <Statistic precision={2} title='余额' value={account?.balance} valueStyle={{ color: banlanceColor }} />
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
