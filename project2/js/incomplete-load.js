import getId from './getId.js'
import resultList from './result-list.js'

export default function incompleteLoad(max = 5,data) {
  getId('incompleteBookshelfList').innerHTML = ''
  let incomplete = 1
  data.forEach((e) => {
    if (e.status == false && incomplete <= max) {
      resultList(e, 'incompleteBookshelfList')
      getId('load-belum').innerHTML = ''
      incomplete++
    }
  })
  if (incomplete > max) {
    getId('load-belum').innerHTML = 'loadmore'
  }
}
