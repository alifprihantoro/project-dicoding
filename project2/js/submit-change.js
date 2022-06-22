import importStorage from './get-storage.js'
import { getForm } from './get-form.js'
import { storageAdd } from './web-storage.js'
import getId from './getId.js'
import showData from './show.js'

export default function changeSubmitBtn(id) {
  document.getElementById('book-submit-change').onclick = function () {
    const data = getForm()
    const projects = importStorage()
    for (var i in projects) {
      if (projects[i].id == id) {
        projects[i].judul = data.judul
        projects[i].penulis = data.penulis
        projects[i].tahun = data.tahun
        projects[i].status = data.status
        break
      }
    }
    storageAdd(projects)
    getId('btn-form').innerHTML = `
<button id="bookSubmit" type="submit">submit</button>
<button id="book-submit-change" type="submit">change</button>
`
  showData(importStorage())
  getId('inputBook').reset()
  return false
  }
}
