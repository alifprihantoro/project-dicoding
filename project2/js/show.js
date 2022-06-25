import getBtnList from './get-btn.js'
import incompleteLoad from './incomplete-load.js'
import completeLoad from './complete-load.js'
import importStorage from './get-storage.js'

export default function showData(max=5,data=importStorage()) {
  incompleteLoad(max,data)
  completeLoad(max,data)
  getBtnList('delete')
  getBtnList('change')
  getBtnList('selesai')
}
