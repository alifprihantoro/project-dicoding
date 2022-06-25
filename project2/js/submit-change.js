import importStorage from './get-storage.js'
import { getForm } from './get-form.js'
import { storageAdd } from './web-storage.js'
import getId from './getId.js'
import showData from './show.js'
import addBtn from './push-data.js'

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
    addBtn()
    showData()
    getId('inputBook').reset()
    return false
  }
}
