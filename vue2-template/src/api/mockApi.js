import axios from '@/api/axios'

const mockDemo = () => {
  return axios.get('/app/system/download', { params: { type: 'mac' } })
}
export default {
  mockDemo
}
