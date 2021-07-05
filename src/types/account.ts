export enum BookType {
  DAILY = 1,
  TRAVEL = 2,
}

export interface AccountGroup {
  _id: string
  name: string
  account_type: { name: string; id: string }[]
}

export interface Book {
  name: string
  type: BookType
  _id: string
}

export interface Account {
  name: string
  type: string
  book_id: string
  group: string
  balance: number
  _id: string
}

export interface CreateAccountParam {
  name: string
  type: string
  group: string
  book_id: string
  balance: number
}

interface RequestParamBase {
  paging?: any
}

export type RequestParamType<T> = RequestParamBase & T
