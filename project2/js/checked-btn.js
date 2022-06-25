import {storageAdd} from "./web-storage.js"
import importStorage from "./get-storage.js"
import getId from "./getId.js"

export default function checkedBtn(id) {
  const data = importStorage()
  for (var i in data) {
    if (data[i].id == id) {
      if (data[i].status == false) {
        data[i].status = true
      } else {
        data[i].status = false
      }
      break
    }
  }
  storageAdd(data)
  getId(id).remove();
}
