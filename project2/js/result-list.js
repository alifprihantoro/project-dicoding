import getId from './getId.js'
import myHtmlList from './innerhtml.js'

export default function resultList(e, resultId) {
  const results_post = getId(resultId)
  const div = document.createElement('div')

  const status = e.status == false ? 'selesai' : 'belum'

  div.className = 'book-list'
  div.setAttribute('title', e.judul)
  div.setAttribute('id', e.id)
  div.innerHTML = myHtmlList(e,status)
  results_post.appendChild(div)
}
