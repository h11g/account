import React, { useEffect } from 'react'
import { useAppDispatch } from 'src/hooks'
import { getBooks } from 'src/redux/account/reducer'

const Home = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getBooks())
  }, [])
  return <div>Home</div>
}

export default Home
