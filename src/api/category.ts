import { Request } from 'common/request'
import { Category } from 'src/types/category'

export const fetchCategory = () => {
  return Request<Category[]>('/mymoney/category/list').post()
}
