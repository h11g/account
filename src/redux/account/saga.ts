import { put, call, takeLatest, select, fork } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { Response } from 'common/request'
import {
  getBooks,
  getBooksSuccess,
  getAccounts,
  getAccountsSuccess,
  getAccountGroups,
  getAccountGroupsSuccess,
  createAccount,
  createAccountSuccess,
} from './reducer'
import { hideModal } from 'src/redux/global-modal/reducer'
import { fetchBooks, fetchAccounts, fetchAccountGroups, apiCreateAccount } from 'src/api/account'
import type { RootState } from 'src/redux/root_store'
import { Book, Account, AccountGroup, CreateAccountParam, RequestParamType } from 'src/types'

export function* accountSaga() {
  yield takeLatest(getBooks, watchGetBooks)
  yield takeLatest(getAccounts, watchGetAccounts)
  yield takeLatest(getAccountGroups, watchGetAccountGroups)
  yield takeLatest(createAccount, watchCreateAccount)
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

function* watchGetAccountGroups() {
  const res: Response<AccountGroup[]> = yield call(fetchAccountGroups)
  if (res.status) {
    yield put(getAccountGroupsSuccess(res.data))
  }
}

function* watchCreateAccount(action: PayloadAction<RequestParamType<CreateAccountParam>>) {
  const res: Response<Account[]> = yield call(apiCreateAccount, action.payload)
  console.log('%c [ res ]', 'font-size:13px; background:pink; color:#bf2c9f;', res)
  if (res.status) {
    yield put(hideModal())
    yield put(createAccountSuccess(res.data))
  }
}
