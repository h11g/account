import { combineReducers } from '@reduxjs/toolkit'
import themeReducer from 'src/redux/theme/reducer'
import counterReducer from 'src/redux/counter/reducer'

export default combineReducers({
  theme: themeReducer,
  counter: counterReducer,
})
