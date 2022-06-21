import { getForm } from './get-form.js'
import cekStatus from './cek-status.js'
import { storageAdd } from './web-storage.js'

// on click submit form / add book
document.getElementById('bookSubmit').onclick = function () {
  let data_book = getForm()
  cekStatus(data_book.status)
  storageAdd(data_book)
  // id_form.reset()
  return false
}
