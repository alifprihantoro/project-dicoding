import getId from './getId.js'
import incompleteLoad from './incomplete-load.js'
import completeLoad from './complete-load.js'
import getBtnList from './get-btn.js'

const getBtn = ()=>{
  getBtnList('delete')
  getBtnList('change')
  getBtnList('selesai')
}
let max_incomplete = 5
getId('load-belum').addEventListener(
  'click',
  () => {
    max_incomplete = max_incomplete + 5
    incompleteLoad(max_incomplete)
    getBtn()
  },
  false
)

let max_complete = 5
getId('load-sudah').addEventListener(
  'click',
  () => {
    max_complete = max_complete + 5
    completeLoad(max_complete)
    getBtn()
  },
  false
)
