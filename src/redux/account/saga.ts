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
  updateAccount,
} from './reducer'
import { hideModal } from 'src/redux/global-modal/reducer'
import {
  fetchBooks,
  fetchAccounts,
  fetchAccountGroups,
  apiCreateAccount,
  apiDeleteAccount,
  apiUpdateAccount,
} from 'src/api/account'
import type { RootState } from 'src/redux/root_store'
import { Book, Account, AccountGroup, CreateAccountParam, RequestParamType, UpdateAccountParam } from 'src/types'

export function* accountSaga() {
  yield takeLatest(getBooks, watchGetBooks)
  yield takeLatest(getAccounts, watchGetAccounts)
  yield takeLatest(getAccountGroups, watchGetAccountGroups)
  yield takeLatest(createAccount, watchCreateAccount)
  yield takeLatest(deleteAccount, watchDeleteAccount)
  yield takeLatest(updateAccount, watchUpdateAccount)
}

function* watchGetBooks() {
  const res: Response<Book[]> = yield call(fetchBooks)
  if (res.status) {
    yield put(getBooksSuccess(res.data))
    yield put(getAccounts())
  }
}

function* watchGetAccounts() {
  const state: RootState = yield select()
  const res: Response<Account[]> = yield call(fetchAccounts, state.account.currentBookId)
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
  const res: Response<null> = yield call(apiDeleteAccount, action.payload)
  if (res.status) {
    yield put(getAccounts())
  }
}

function* watchUpdateAccount(action: PayloadAction<RequestParamType<UpdateAccountParam>>) {
  const res: Response<null> = yield call(apiUpdateAccount, action.payload)
  if (res.status) {
    yield put(hideModal())
    yield put(getAccounts())
  }
}
