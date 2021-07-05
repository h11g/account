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
  deleteAccount,
} from './reducer'
import { hideModal } from 'src/redux/global-modal/reducer'
import { fetchBooks, fetchAccounts, fetchAccountGroups, apiCreateAccount, apiDeleteAccount } from 'src/api/account'
import type { RootState } from 'src/redux/root_store'
import { Book, Account, AccountGroup, CreateAccountParam, RequestParamType } from 'src/types'

export function* accountSaga() {
  yield takeLatest(getBooks, watchGetBooks)
  yield takeLatest(getAccounts, watchGetAccounts)
  yield takeLatest(getAccountGroups, watchGetAccountGroups)
  yield takeLatest(createAccount, watchCreateAccount)
  yield takeLatest(deleteAccount, watchDeleteAccount)
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
  if (res.status) {
    yield put(hideModal())
    yield put(getAccountsSuccess(res.data))
  }
}

function* watchDeleteAccount(action: PayloadAction<string>) {
  yield call(apiDeleteAccount, action.payload)
  const state: RootState = yield select()
  yield put(getAccounts(state.account.currentBookId))
}
