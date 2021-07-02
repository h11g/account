import React, { useEffect, useMemo, useState } from 'react'
import _ from 'lodash'
import MenuBar from './components/menu-bar'
import AccountHeader from './components/account-header'
import { useAppDispatch, useAppSelector } from 'src/hooks'
import { getBooks, getAccountGroups } from 'src/redux/account/reducer'
import { Account, AccountGroup } from 'src/types'

const Account = () => {
  const dispatch = useAppDispatch()
  const { accounts, accountGroups } = useAppSelector((state) => state.account)
  const [selectKey, setSelectedKey] = useState<string>('')

  useEffect(() => {
    dispatch(getAccountGroups())
    dispatch(getBooks())
  }, [])

  const menuDatas = useMemo(() => {
    if (!accounts.length || !accountGroups.length) {
      return []
    }
    const menuGroupBy = _.groupBy(accounts, 'group')
    const _menuDatas: { group: AccountGroup; sub: Account[] }[] = []

    _.forEach(accountGroups, (group) => {
      _menuDatas.push({
        group,
        sub: menuGroupBy[group._id],
      })
    })

    return _menuDatas
  }, [accounts, accountGroups])

  useEffect(() => {
    setSelectedKey(menuDatas[0]?.sub[0]?._id)
  }, [menuDatas])

  const handleSelect = (keys: string[]) => {
    setSelectedKey(keys[0])
  }

  return (
    <div className='tw-flex tw-min-h-full'>
      <MenuBar selectedKeys={[selectKey]} menus={menuDatas} onSelected={handleSelect} />
      <div className='tw-w-full tw-ml-3'>
        <AccountHeader accountId={selectKey} />
      </div>
    </div>
  )
}

export default Account
