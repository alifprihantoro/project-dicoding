import getId from './getId.js'
import resultList from './result-list.js'

export default function filterByStatus(data) {
  getId('incompleteBookshelfList').innerHTML = ''
  getId('completeBookshelfList').innerHTML = ''
  data.forEach((e) => {
    if (e.status == false) {
      resultList(e, 'incompleteBookshelfList')
    } else {
      resultList(e, 'completeBookshelfList')
    }
  })
}
