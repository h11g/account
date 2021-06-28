declare enum BookType {
  DAILY = 1,
  TRAVEL = 2,
}

declare enum AccountType {
  OTHER = 0,
  CASH = 1,
  WECHAT = 2,
  ALIPAY = 3,
  BANK_CARD = 4,
  CREDIT_CARD = 5,
}

declare enum AccountGroup {
  CAPITAL = 1,
  CREDIT_CARD = 2,
  INVESTING = 3,
  DEBTS = 4,
}

declare interface Book {
  name: string
  type: BookType
  _id: string
}

declare interface Account {
  name: string
  type: AccountType
  book_id: string
  group: AccountGroup
  _id: string
}
