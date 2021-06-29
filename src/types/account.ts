export enum BookType {
  DAILY = 1,
  TRAVEL = 2,
}

export enum AccountType {
  OTHER = 0,
  CASH = 1,
  WECHAT = 2,
  ALIPAY = 3,
  BANK_CARD = 4,
  CREDIT_CARD = 5,
}

export enum AccountGroup {
  CAPITAL = 1,
  CREDIT_CARD = 2,
  INVESTING = 3,
  DEBTS = 4,
}

export interface Book {
  name: string
  type: BookType
  _id: string
}

export interface Account {
  name: string
  type: AccountType
  book_id: string
  group: AccountGroup
  balance: number
  _id: string
}
