import { combineReducers } from '@reduxjs/toolkit'
import userRerducer from 'src/redux/user/reducer'
import accountReducer from 'src/redux/account/reducer'

export default combineReducers({
  user: userRerducer,
  account: accountReducer,
})
