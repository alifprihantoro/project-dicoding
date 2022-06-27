import getId from './getId.js'
import myHtmlList from './innerhtml.js'

export default function resultList(data, resultId, status) {
  data.forEach((e) => {
    const results_post = getId(resultId)
    const div = document.createElement('div')

    div.className = 'book-list'
    div.setAttribute('title', e.judul)
    div.setAttribute('id', e.id)
    div.innerHTML = myHtmlList(e, status)
    results_post.appendChild(div)
  })
}
