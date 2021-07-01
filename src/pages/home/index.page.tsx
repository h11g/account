import React, { useEffect } from 'react'
import { useAppDispatch } from 'src/hooks'
import { getBooks, getAccountGroups } from 'src/redux/account/reducer'
import AssetProfile from './components/asset-profile'

const Home = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAccountGroups())
    dispatch(getBooks())
  }, [])

  return (
    <div>
      <AssetProfile />
    </div>
  )
}

export default Home
