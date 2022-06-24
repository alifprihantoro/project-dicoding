import getBtnList from './get-btn.js'
import incompleteLoad from './incomplete-load.js'
import completeLoad from './complete-load.js'

export default function showData() {
  incompleteLoad()
  completeLoad()
  getBtnList('delete')
  getBtnList('change')
  getBtnList('selesai')
}
