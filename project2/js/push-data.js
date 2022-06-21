import { getForm } from './get-form.js'
import { storageAdd } from './web-storage.js'
import importStorage from './get-storage.js'
import showData from './show.js'

export const data_book = importStorage()

document.getElementById('bookSubmit').onclick = function () {
  data_book.push(getForm())
  storageAdd(data_book)
  alert('berhasil!')
  id_form.reset()
  showData()
  return false
}
