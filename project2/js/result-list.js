import getId from "./getId.js"

export default function resultList(e, resultId) {
  const results_post = getId(resultId)
  const div = document.createElement('div')
  div.className = 'book-list'
  div.setAttribute('title', e.judul)
  div.setAttribute('value', e.id)
  div.innerHTML = `
<div>
  <h3>${e.judul}</h3>
  <h4>${e.penulis}</h4>
  <h4>${e.tahun}</h4>
</div>
<div>
  <button class='delete' type="submit">Delete</button>
  <button class='change' type="submit">Ubah</button>
  <button class='selesai' type="submit">selesai</button>
</div>
  `
  results_post.appendChild(div)
}
