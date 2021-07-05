import React, { useEffect, useMemo, useState } from 'react'
import _ from 'lodash'
import { Space } from 'antd'
import MenuBar from './components/menu-bar'
import AccountHeader from './components/account-header'
import AccountDetail from './components/account-detail'
import { useAppDispatch, useAppSelector } from 'src/hooks'
import { getBooks, getAccountGroups } from 'src/redux/account/reducer'
import { Account, AccountGroup } from 'src/types'

const Account = () => {
  const dispatch = useAppDispatch()
  const { accounts, accountGroups, accountMapByGroupId, accountMapById } = useAppSelector((state) => state.account)
  const [selectKey, setSelectedKey] = useState<string>('')
  const [currentAccount, setCurrentAccount] = useState<Account>()

  useEffect(() => {
    dispatch(getAccountGroups())
    dispatch(getBooks())
  }, [])

  const menuDatas = useMemo(() => {
    if (!accounts.length || !accountGroups.length) {
      return []
    }

    const _menuDatas: { group: AccountGroup; sub: Account[] }[] = []

    _.forEach(accountGroups, (group) => {
      _menuDatas.push({
        group,
        sub: accountMapByGroupId[group._id],
      })
    })

    return _menuDatas
  }, [accounts, accountGroups])

  useEffect(() => {
    const accountId = getSelectKey()
    setSelectedKey(accountId)
    setCurrentAccount(accountMapById[accountId])
  }, [menuDatas])

  const getSelectKey = (): string => {
    if (selectKey && currentAccount) {
      // selectKey 能在 account 列表中找到
      if (_.find(accounts, (account) => account._id === selectKey)) {
        return selectKey
      } else {
        // selectKey 对应 account 被删除情况下，更改选中当前 group 的第一个 account
        if (accountMapByGroupId[currentAccount.group].length) {
          return accountMapByGroupId[currentAccount.group][0]._id
        }
      }
    }
    return menuDatas[0]?.sub[0]?._id || ''
  }

  const handleSelect = (keys: string[]) => {
    setSelectedKey(keys[0])
  }

  return (
    <div className='tw-flex tw-min-h-full'>
      <MenuBar selectedKeys={[selectKey]} menus={menuDatas} onSelected={handleSelect} />
      <div className='tw-w-full tw-ml-3'>
        <Space direction='vertical' className='tw-w-full'>
          <AccountHeader accountId={selectKey} />
          <AccountDetail />
        </Space>
      </div>
    </div>
  )
}

export default Account
