import getId from './getId.js'
import resultList from './result-list.js'

export default function completeLoad(max = 5,data) {
  getId('completeBookshelfList').innerHTML = ''
  let complete = 1
  data.forEach((e) => {
    if (e.status == true && complete <= max) {
      resultList(e, 'completeBookshelfList')
      getId('load-sudah').innerHTML = ''
      complete++
    }
  })
  if (complete > max) {
    getId('load-sudah').innerHTML = '<button>loadmore</button>'
  }
}
