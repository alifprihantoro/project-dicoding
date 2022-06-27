import importStorage from './get-storage.js'
import { getForm } from './get-form.js'
import { storageAdd } from './web-storage.js'
import getId from './getId.js'
import addBtn from './push-data.js'
import myHtmlList from './innerhtml.js'

export default function changeSubmitBtn(id) {
  document.getElementById('book-submit-change').onclick = function () {
    const data = getForm()
    const getData = importStorage()
    for (var i in getData) {
      if (getData[i].id == id) {
        getData[i].judul = data.judul
        getData[i].penulis = data.penulis
        getData[i].tahun = data.tahun
        getData[i].status = data.status
        const status = getData[i].status == false ? 'selesai' : 'belum'
        getId(id).innerHTML = myHtmlList(getData[i], status)
        break
      }
    }
    storageAdd(getData)
    addBtn()
    getId('inputBook').reset()
    getId('form').classList.toggle('hide')
    return false
  }
}
