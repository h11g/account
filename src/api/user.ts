import { Request } from 'common/request'

export const fetchUserInfo = () => {
  return Request<User>('/mymoney/user/info').post()
}
