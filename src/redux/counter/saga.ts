import { put, takeEvery, delay } from 'redux-saga/effects'
import { increment, decrement, incrementAsync, decrementAsync } from './reducer'

export function* counterSaga() {
  yield takeEvery(incrementAsync, watchIncrement)
  yield takeEvery(decrementAsync, watchDecrement)
}

function* watchIncrement() {
  yield delay(1000)
  yield put(increment())
}

function* watchDecrement() {
  yield delay(1000)
  yield put(decrement())
}
