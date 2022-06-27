import getId from './getId.js'
import importStorage from './get-storage.js'

export default function changeForm(id) {
  const data = importStorage()
  for (var i in data) {
    if (data[i].id == id) {
      getId('inputBookTitle').value = data[i].judul
      getId('inputBookAuthor').value = data[i].penulis
      getId('inputBookYear').value = data[i].tahun
      getId('inputBookIsComplete').checked = data[i].status
      break
    }
  }
}
