import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Book, Account, AccountGroup, CreateAccountParam, RequestParamType } from 'src/types'

interface SliceState {
  books: Book[]
  currentBookId: string
  accounts: Account[]
  accountGroups: AccountGroup[]
}

const initialState: SliceState = {
  books: [],
  currentBookId: '',
  accounts: [],
  accountGroups: [],
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
    },
    getAccounts: (state, action: PayloadAction<string>) => state,
    getAccountsSuccess: (state, action: PayloadAction<Account[]>) => {
      state.accounts = action.payload
    },
    createAccount: (state, action: PayloadAction<RequestParamType<CreateAccountParam>>) => state,
    createAccountSuccess: (state, action: PayloadAction<Account[]>) => {
      state.accounts = action.payload
    },
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
  createAccountSuccess,
} = accountSlice.actions
export default accountSlice.reducer
