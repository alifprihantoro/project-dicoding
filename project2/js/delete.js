import { storageAdd } from './web-storage.js'
import showData from './show.js'
import importStorage from './get-storage.js'

export default function deleteThisList(id) {
  const data = importStorage()
  const newArr = data.filter((object) => {
    return object.id !== parseInt(id)
  })
  storageAdd(newArr)
  showData(newArr)
}
