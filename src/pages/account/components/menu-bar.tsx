import React, { FC } from 'react'
import { Menu } from 'antd'
import _ from 'lodash'
import { Account, AccountGroup } from 'src/types'

const { SubMenu } = Menu

interface IProps {
  menus: { group: AccountGroup; sub: Account[] }[]
  selectedKeys: string[]
  onSelected: (selectedKeys: string[]) => void
}

const MenuBar: FC<IProps> = ({ menus, selectedKeys, onSelected }) => {
  const handleSelect = ({ selectedKeys }: any) => {
    onSelected(selectedKeys)
  }

  if (!menus.length) {
    return null
  }

  const defaultOpenKeys = _.map(menus, (menu) => {
    return menu.group._id
  })

  return (
    <Menu
      style={{ width: 256 }}
      mode='inline'
      defaultOpenKeys={defaultOpenKeys}
      selectedKeys={selectedKeys}
      onSelect={handleSelect}
    >
      {_.map(menus, (data) => (
        <SubMenu key={data.group._id} title={data.group.name}>
          {_.map(data.sub, (account) => (
            <Menu.Item key={account._id}>{account.name}</Menu.Item>
          ))}
        </SubMenu>
      ))}
    </Menu>
  )
}

export default MenuBar
