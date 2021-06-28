import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SliceState {
  books: Book[]
  currentBookId: string
  accounts: Account[]
}

const initialState: SliceState = {
  books: [],
  currentBookId: '',
  accounts: [],
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
    getAccounts: (state, action: PayloadAction<string>) => state,
    getAccountsSuccess: (state, action: PayloadAction<Account[]>) => {
      state.accounts = action.payload
    },
  },
})

export const { getBooks, getBooksSuccess, getAccounts, getAccountsSuccess } = accountSlice.actions
export default accountSlice.reducer
