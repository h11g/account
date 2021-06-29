import { Request } from 'common/request'
import { Book, Account } from 'src/types'
export const fetchBooks = () => {
  return Request<Book[]>('/mymoney/book/list').post()
}

export const fetchAccounts = (book_id: string) => {
  return Request<Account[]>('/mymoney/account/list').data({ book_id }).post()
}
