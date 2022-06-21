import { getSearch } from './get-form.js'
import { data_book } from './push-data.js'
import filterByStatus from './filter-status.js'

// const getSearchVal = getSearch()
const getSearchVal = 'b'
const data_result_search = []
data_book
  .filter((item) => {
    return item.judul.includes(getSearchVal)
  })
  .forEach((e) => {
    data_result_search.push(e)
    return e
  })
console.log(data_result_search)
// reset result
// get id
//
export default function showSearch() {
  filterByStatus(data_result_search, 'false', 'incompleteBookshelfList')
  filterByStatus(data_result_search, 'true', 'completeBookshelfList')
}
