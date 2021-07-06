import React, { FC } from 'react'
import { Form, Input, Select, Button, InputNumber } from 'antd'
import { useAppSelector, useAppDispatch } from 'src/hooks'
import _ from 'lodash'
import { createAccount, updateAccount } from 'src/redux/account/reducer'
import { Account } from 'src/types'

interface IProps {
  currentGroupId: string
  type?: 'edit' | 'create'
  account?: Account
}

const AccountModifyForm: FC<IProps> = ({ currentGroupId, type = 'create', account }) => {
  const dispatch = useAppDispatch()
  const { accountGroups, currentBookId } = useAppSelector((state) => state.account)

  const currentGroup = _.find(accountGroups, (group) => group._id === currentGroupId)

  const handleSubmit = (values: any) => {
    const { name, type: account_type, balance } = values
    if (type === 'create') {
      dispatch(
        createAccount({
          name,
          type: account_type,
          group: currentGroupId,
          balance,
          book_id: currentBookId,
        })
      )
    } else if (type === 'edit' && account) {
      dispatch(
        updateAccount({
          id: account._id,
          name,
          type: account_type,
          balance,
        })
      )
    }
  }

  if (type === 'edit' && !account) {
    console.warn('AccountModifyForm 缺少 account 信息')
  }

  return (
    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} onFinish={handleSubmit}>
      <Form.Item
        label='名称'
        name='name'
        initialValue={account?.name}
        rules={[
          {
            required: true,
            message: '请输入账户名',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='账户类型'
        name='type'
        initialValue={account?.type}
        rules={[
          {
            required: true,
            message: '请选择账户类型',
          },
        ]}
      >
        <Select>
          {_.map(currentGroup?.account_type, (type) => (
            <Select.Option key={type.id} value={type.id}>
              {type.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label='余额' name='balance' initialValue={account?.balance || 0}>
        <InputNumber style={{ width: 150 }} min={0} precision={2} step={1000} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4 }}>
        <Button type='primary' htmlType='submit'>
          提交
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AccountModifyForm
