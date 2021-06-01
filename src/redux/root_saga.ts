import { all, take, select } from 'redux-saga/effects'
import { counterSaga } from './counter/saga'

function* loggerSaga(): Generator<any, any, any> {
  while (true) {
    const action = yield take('*')
    const state = yield select()
    console.log('%c [ redux action ]', 'font-size:13px; background:pink; color:#bf2c9f;', action.type, state)
  }
}

export default function* rootSaga() {
  const sagas = [counterSaga()]
  if (process.env.NODE_ENV !== 'production') {
    sagas.push(loggerSaga())
  }
  yield all(sagas)
}
