import React, { useEffect } from 'react'
import RecordHeader from './components/record-header'
import { getCategory } from 'src/redux/category/reducer'
import { useAppDispatch } from 'src/hooks'
const Record = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCategory())
  }, [])
  return (
    <div>
      <RecordHeader />
    </div>
  )
}

export default Record
