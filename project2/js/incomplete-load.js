import getId from './getId.js'
import resultList from './result-list.js'
import importStorage from './get-storage.js'

export default function incompleteLoad(max = 5) {
  getId('incompleteBookshelfList').innerHTML = ''
  let incomplete = 1
  importStorage().forEach((e) => {
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
