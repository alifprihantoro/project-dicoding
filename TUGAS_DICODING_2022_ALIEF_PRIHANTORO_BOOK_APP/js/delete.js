import { storageAdd } from './web-storage.js'
import importStorage from './get-storage.js'
import getId from './getId.js'

export default function deleteThisList(id) {
  const result = confirm('Want to delete?')
  if (result == true) {
    const data = importStorage()
    const newArr = data.filter((object) => {
      return object.id !== parseInt(id)
    })
    storageAdd(newArr)
    getId(id).remove()
  }
}
