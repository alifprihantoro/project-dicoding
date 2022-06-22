import filterByStatus from './filter-status.js'
import getBtnList from './get-btn.js'

export default function showData(data) {
  filterByStatus(data)
  getBtnList('delete')
  getBtnList('change')
  getBtnList('selesai')
}
