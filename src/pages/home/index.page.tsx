import React, { useEffect } from 'react'
import { useAppDispatch } from 'src/hooks'
import { getBooks } from 'src/redux/account/reducer'
import AssetProfile from './components/asset-profile'

const Home = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getBooks())
  }, [])

  return (
    <div>
      <AssetProfile />
    </div>
  )
}

export default Home
