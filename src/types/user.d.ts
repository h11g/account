declare interface User {
  _id: string
  username: string
  email: string
}

declare interface AuthResponse {
  access_token: string
  userInfo: User
}
