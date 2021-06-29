import { put, call, takeLatest, select, fork } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { Response } from 'common/request'
import { getBooks, getBooksSuccess, getAccounts, getAccountsSuccess } from './reducer'
import { fetchBooks, fetchAccounts } from 'src/api/account'
import type { RootState } from 'src/redux/root_store'
import { Book, Account } from 'src/types'

export function* accountSaga() {
  yield takeLatest(getBooks, watchGetBooks)
  yield takeLatest(getAccounts, watchGetAccounts)
}

function* watchGetBooks() {
  const res: Response<Book[]> = yield call(fetchBooks)
  if (res.status) {
    yield put(getBooksSuccess(res.data))
    const state: RootState = yield select()
    yield put(getAccounts(state.account.currentBookId))
  }
}

function* watchGetAccounts(action: PayloadAction<string>) {
  const res: Response<Account[]> = yield call(fetchAccounts, action.payload)
  if (res.status) {
    yield put(getAccountsSuccess(res.data))
  }
}
