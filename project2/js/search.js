import filterTitle from './filter-title.js'
import getId from './getId.js'

document.getElementById('searchSubmit').onclick = function () {
  filterTitle(getId('search-by').value)
  return false
}
