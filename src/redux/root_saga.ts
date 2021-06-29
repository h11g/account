import { all, take, select } from 'redux-saga/effects'
import { userSaga } from './user/saga'
import { accountSaga } from './account/saga'

function* loggerSaga(): Generator<any, any, any> {
  while (true) {
    const action = yield take('*')
    const state = yield select()
    console.groupCollapsed('%c [ redux action ]', 'font-size:13px; background:pink; color:#bf2c9f;', action.type)
    console.log('%c [ state ]', 'font-size:13px; background:pink; color:#bf2c9f;', state)
    console.groupEnd()
  }
}

export default function* rootSaga() {
  const sagas: any[] = [userSaga(), accountSaga()]
  if (process.env.NODE_ENV !== 'production') {
    sagas.push(loggerSaga())
  }
  yield all(sagas)
}
