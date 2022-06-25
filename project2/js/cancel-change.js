import getId from "./getId.js"
import addBtn from "./push-data.js"

export default function cancelChange() {
  document.getElementById('book-cancel-change').onclick = function () {
    getId('inputBook').reset()
    addBtn()
    getId('form').classList.toggle('hide')
    return false
  }
}
