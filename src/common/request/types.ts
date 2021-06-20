interface Response<T> {
  code: number
  msg: string
  status: boolean
  data: T
}

export type { Response }
