import React, { useState } from 'react'
import { Form, Select, Cascader, Button, InputNumber } from 'antd'
import { useAppSelector } from 'src/hooks'
import _ from 'lodash'
import { DatePicker } from 'common/components'
import day from 'dayjs'

class FormStateProps {
  category = []
}

const initFormState = new FormStateProps()

const FormItem = Form.Item

const OutlayForm = () => {
  const [formState, setFormState] = useState<FormStateProps>(initFormState)
  const { categories } = useAppSelector((state) => state.category)
  const { accounts } = useAppSelector((state) => state.account)

  const handleSubmit = (values: any) => {
    console.log('%c [ values ]', 'font-size:13px; background:pink; color:#bf2c9f;', values)
  }

  return (
    <Form layout='inline' onFinish={handleSubmit} scrollToFirstError>
      <FormItem
        name='category'
        rules={[
          {
            required: true,
            message: '请选择分类',
          },
        ]}
      >
        <Cascader
          options={categories}
          fieldNames={{ label: 'name', value: '_id', children: 'category_2' }}
          placeholder='请选择分类'
          changeOnSelect
        />
      </FormItem>

      <FormItem
        name='account'
        rules={[
          {
            required: true,
            message: '请选择账户',
          },
        ]}
      >
        <Select placeholder='请选择账户' style={{ width: 150 }}>
          {_.map(accounts, (acc) => (
            <Select.Option key={acc._id} value={acc._id}>
              {acc.name}
            </Select.Option>
          ))}
        </Select>
      </FormItem>

      <FormItem name='time' initialValue={day()}>
        <DatePicker showTime format='YYYY-MM-DD HH:mm:ss' />
      </FormItem>

      <FormItem name='amount' initialValue={0}>
        <InputNumber style={{ width: 150 }} min={0} step={100} precision={2} />
      </FormItem>

      <FormItem>
        <Button type='primary' htmlType='submit'>
          保存
        </Button>
      </FormItem>
    </Form>
  )
}

export default OutlayForm
