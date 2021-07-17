import React, { useEffect } from 'react'
import RecordHeader from './components/record-header'
import { getCategory } from 'src/redux/category/reducer'
import { getBooks, getAccountGroups } from 'src/redux/account/reducer'
import { useAppDispatch } from 'src/hooks'
const Record = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCategory())
    dispatch(getAccountGroups())
    dispatch(getBooks())
  }, [])
  return (
    <div>
      <RecordHeader />
    </div>
  )
}

export default Record
