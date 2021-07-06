import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Book, Account, AccountGroup, CreateAccountParam, RequestParamType, UpdateAccountParam } from 'src/types'
import _ from 'lodash'

interface SliceState {
  books: Book[]
  currentBookId: string
  accounts: Account[]
  accountGroups: AccountGroup[]
  accountMapById: { [key: string]: Account }
  accountMapByGroupId: { [key: string]: Account[] }
  accountGroupMapById: { [key: string]: AccountGroup }
}

const initialState: SliceState = {
  books: [],
  currentBookId: '',
  accounts: [],
  accountMapById: {},
  accountMapByGroupId: {},
  accountGroups: [],
  accountGroupMapById: {},
}

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    getBooks: (state) => state,
    getBooksSuccess: (state, action: PayloadAction<Book[]>) => {
      state.books = action.payload
      if (!state.currentBookId && !!action.payload.length) {
        state.currentBookId = action.payload[0]._id
      }
    },
    getAccountGroups: (state) => state,
    getAccountGroupsSuccess: (state, action: PayloadAction<AccountGroup[]>) => {
      state.accountGroups = action.payload
      state.accountGroupMapById = _.keyBy(action.payload, '_id')
    },
    getAccounts: (state) => state,
    getAccountsSuccess: (state, action: PayloadAction<Account[]>) => {
      state.accounts = action.payload
      state.accountMapById = _.keyBy(action.payload, '_id')
      state.accountMapByGroupId = _.groupBy(action.payload, 'group')
    },
    createAccount: (state, action: PayloadAction<RequestParamType<CreateAccountParam>>) => state,
    deleteAccount: (state, action: PayloadAction<string>) => state,
    updateAccount: (state, action: PayloadAction<RequestParamType<UpdateAccountParam>>) => state,
  },
})

export const {
  getBooks,
  getBooksSuccess,
  getAccounts,
  getAccountsSuccess,
  getAccountGroups,
  getAccountGroupsSuccess,
  createAccount,
  deleteAccount,
  updateAccount,
} = accountSlice.actions
export default accountSlice.reducer
