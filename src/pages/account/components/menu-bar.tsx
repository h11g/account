import React, { FC } from 'react'
import { Menu } from 'antd'
import _ from 'lodash'
import { useAppDispatch } from 'src/hooks'
import { Account, AccountGroup } from 'src/types'
import { showModal } from 'src/redux/global-modal/reducer'
import AccountModifyForm from './account-modify-form'

const { SubMenu } = Menu

interface IProps {
  menus: { group: AccountGroup; sub: Account[] }[]
  selectedKeys: string[]
  onSelected: (selectedKeys: string[]) => void
}

const MenuBar: FC<IProps> = ({ menus, selectedKeys, onSelected }) => {
  const dispatch = useAppDispatch()

  const handleSelect = ({ selectedKeys }: any) => {
    onSelected(selectedKeys)
  }

  if (!menus.length) {
    return null
  }

  const defaultOpenKeys = _.map(menus, (menu) => {
    return menu.group._id
  })

  const handleGroupTitleClick = (data: { group: AccountGroup; sub: Account[] }) => {
    if (!data.sub) {
      dispatch(
        showModal({
          title: '新建账户',
          content: <AccountModifyForm currentGroupId={data.group._id} />,
          footer: null,
        })
      )
    }
  }

  return (
    <Menu
      style={{ width: 256 }}
      mode='inline'
      defaultOpenKeys={defaultOpenKeys}
      selectedKeys={selectedKeys}
      onSelect={handleSelect}
    >
      {_.map(menus, (data) => (
        <SubMenu key={data.group._id} title={data.group.name} onTitleClick={() => handleGroupTitleClick(data)}>
          {_.map(data.sub, (account) => (
            <Menu.Item key={account._id}>{account.name}</Menu.Item>
          ))}
        </SubMenu>
      ))}
    </Menu>
  )
}

export default MenuBar
