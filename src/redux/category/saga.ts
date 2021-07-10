import { put, call, takeLatest, select, fork } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { Response } from 'common/request'
import { fetchCategory } from 'src/api/category'
import { getCategory, getCategorySuccess } from './reducer'
import { Category } from 'src/types/category'

export function* categorySaga() {
  yield takeLatest(getCategory, watchGetCategory)
}

function* watchGetCategory() {
  const res: Response<Category[]> = yield call(fetchCategory)
  if (res.status) {
    yield put(getCategorySuccess(res.data))
  }
}
