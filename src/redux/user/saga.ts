import { put, takeEvery, delay, call } from 'redux-saga/effects'
import { getUserInfoSuccess, getUserInfo } from './reducer'
import { fetchUserInfo } from 'src/api/user'

export function* userSaga() {
  yield takeEvery(getUserInfo, watchFetchUserInfo)
}

function* watchFetchUserInfo(): Generator {
  const user = yield call(fetchUserInfo)
  console.log('%c [ user ]', 'font-size:13px; background:pink; color:#bf2c9f;', user)
}
