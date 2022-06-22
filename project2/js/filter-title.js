import { getSearch } from './get-form.js'
import showData from './show.js'
import importStorage from './get-storage.js'

export default function filterTitle() {
  const getSearchVal = getSearch()
  const data_result_search = []
  const data = importStorage()
    data
    .filter((item) => {
      return item.judul.includes(getSearchVal)
    })
    .forEach((e) => {
      data_result_search.push(e)
      return e
    })
  showData(data_result_search)
}
