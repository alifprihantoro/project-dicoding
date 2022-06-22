import { getForm } from './get-form.js'
import { storageAdd } from './web-storage.js'
import importStorage from './get-storage.js'
import getId from './getId.js'
import showData from './show.js'
import btnSubmitHtml from './btn-submit.js'

export default function addBtn() {
  btnSubmitHtml()
  document.getElementById('bookSubmit').onclick = function () {
    const data = importStorage()
    data.push(getForm())
    storageAdd(data)
    alert('berhasil!')
    getId('inputBook').reset()
    showData(importStorage())
    return false
  }
}
