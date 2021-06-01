import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './root_reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root_saga'

const sagaMiddleWare = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleWare),
})

sagaMiddleWare.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
