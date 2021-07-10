import { combineReducers } from '@reduxjs/toolkit'
import userRerducer from 'src/redux/user/reducer'
import accountReducer from 'src/redux/account/reducer'
import globalModalReducer from 'src/redux/global-modal/reducer'
import categoryReducer from 'src/redux/category/reducer'

export default combineReducers({
  user: userRerducer,
  account: accountReducer,
  globalModal: globalModalReducer,
  category: categoryReducer,
})
