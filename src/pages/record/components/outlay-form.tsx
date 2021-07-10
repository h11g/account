import React, { useState } from 'react'
import { Form, Select, Cascader, Button } from 'antd'
import { useAppSelector } from 'src/hooks'

class FormStateProps {
  category = []
}

const initFormState = new FormStateProps()

const FormItem = Form.Item

const OutlayForm = () => {
  const [formState, setFormState] = useState<FormStateProps>(initFormState)
  const { categories } = useAppSelector((state) => state.category)

  const handleSubmit = (values: any) => {
    console.log('%c [ values ]', 'font-size:13px; background:pink; color:#bf2c9f;', values)
  }

  return (
    <Form layout='inline' onFinish={handleSubmit}>
      <FormItem name='category'>
        <Cascader
          options={categories}
          fieldNames={{ label: 'name', value: '_id', children: 'category_2' }}
          placeholder='select'
          changeOnSelect
        />
      </FormItem>
    </Form>
  )
}

export default OutlayForm
