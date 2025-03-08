import { service } from '~/utils'

const baseURL = '/tenant'

export const TenantApi = {
  create: data => service.post(`${baseURL}/create`, data),
  modify: data => service.post(`${baseURL}/modify`, data),
  remove: id => service.post(`${baseURL}/remove/${id}`),
  page: params => service.get(`${baseURL}/page`, { params }),
  info: id => service.get(`${baseURL}/info/${id}`)
}
