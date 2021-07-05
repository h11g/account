import { Request } from 'common/request'
import { Book, Account, AccountGroup, CreateAccountParam, RequestParamType } from 'src/types'

export const fetchBooks = () => {
  return Request<Book[]>('/mymoney/book/list').post()
}

export const fetchAccounts = (book_id: string) => {
  return Request<Account[]>('/mymoney/account/list').data({ book_id }).post()
}

export const fetchAccountGroups = () => {
  return Request<AccountGroup[]>('/mymoney/account/group/list').post()
}

export const apiCreateAccount = (params: RequestParamType<CreateAccountParam>) => {
  return Request<Account[]>('/mymoney/account/create').data(params).post()
}
