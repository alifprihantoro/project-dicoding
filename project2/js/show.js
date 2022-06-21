import { data_book } from './push-data.js'
import filterByStatus from './filter-status.js'

export default function showData() {
  filterByStatus(data_book, 'false', 'incompleteBookshelfList')
  filterByStatus(data_book, 'true', 'completeBookshelfList')
}
