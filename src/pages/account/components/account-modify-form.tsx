import React, { FC } from 'react'
import { Form, Input, Select, Button, InputNumber } from 'antd'
import { useAppSelector, useAppDispatch } from 'src/hooks'
import _ from 'lodash'
import { createAccount } from 'src/redux/account/reducer'

interface IProps {
  currentGroupId: string
}

const AccountModifyForm: FC<IProps> = ({ currentGroupId }) => {
  const dispatch = useAppDispatch()
  const { accountGroups, currentBookId } = useAppSelector((state) => state.account)

  const currentGroup = _.find(accountGroups, (group) => group._id === currentGroupId)

  const handleSubmit = (values: any) => {
    console.log('%c [ values ]', 'font-size:13px; background:pink; color:#bf2c9f;', values)
    const { name, type, balance } = values
    dispatch(
      createAccount({
        name,
        type,
        group: currentGroupId,
        balance,
        book_id: currentBookId,
      })
    )
  }

  return (
    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} onFinish={handleSubmit}>
      <Form.Item
        label='名称'
        name='name'
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
      <Form.Item label='余额' name='balance' initialValue={0}>
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
