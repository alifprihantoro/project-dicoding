import importStorage from './get-storage.js'
import { getForm } from './get-form.js'
import { storageAdd } from './web-storage.js'
import getId from './getId.js'
import addBtn from './push-data.js'

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
        getId(id).innerHTML = `<div>
  <h3>${getData[i].judul}</h3>
  <h4>${getData[i].penulis}</h4>
  <h4>${getData[i].tahun}</h4>
</div>
<div>
  <button class='delete' type="submit">Delete</button>
  <button class='change' type="submit">Ubah</button>
  <br/>
  <button class='selesai' type="submit">Taruh di list ${status} baca</button>
</div>`
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
