import React from 'react'
import { Form, Select, TreeSelect, Cascader } from 'antd'

const FormItem = Form.Item

const OutlayForm = () => {
  return (
    <Form layout='inline'>
      <FormItem name='category' initialValue='test'>
        <TreeSelect showSearch treeDefaultExpandAll>
          <TreeSelect.TreeNode value='test' title='test' />
        </TreeSelect>
      </FormItem>
    </Form>
  )
}

export default OutlayForm
