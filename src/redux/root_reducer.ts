import { combineReducers } from '@reduxjs/toolkit'
import themeReducer from 'src/redux/theme/reducer'
import counterReducer from 'src/redux/counter/reducer'
import userRerducer from 'src/redux/user/reducer'

export default combineReducers({
  theme: themeReducer,
  counter: counterReducer,
  user: userRerducer,
})
