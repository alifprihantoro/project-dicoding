import { getSearch } from './get-form.js'
import showData from './show.js'
import importStorage from './get-storage.js'
import loadmoreBtn from './loadmore.js'

export default function filterTitle(option) {
  const getSearchVal = getSearch()
  const data_result_search = []
  const data = importStorage()
  data
    .filter((item) => {
      if (option === 'judul') {
        return item.judul.includes(getSearchVal)
      } else {
        return item.penulis.includes(getSearchVal)
      }
    })
    .forEach((e) => {
      data_result_search.push(e)
      return e
    })
  showData(5, data_result_search)
  loadmoreBtn(data_result_search)
}
