import { getForm } from './get-form.js'
import { storageAdd } from './web-storage.js'
import importStorage from './get-storage.js'
import getId from './getId.js'
import showData from './show.js'
import btnSubmitHtml from './btn-submit.js'

export default function addBtn() {
  btnSubmitHtml()
  getId('cancelSub').onclick = () => {
    getId('form').classList.toggle('hide')
    return false
  }
  getId('bookSubmit').onclick = () => {
    if ((getForm().judul === '') | (getForm().penulis === '')) {
      alert('Pastikan seluruh data terisi!')
    } else {
      const data = importStorage()
      data.push(getForm())
      storageAdd(data)
      getId('inputBook').reset()
      showData()
    }
    return false
  }
}
