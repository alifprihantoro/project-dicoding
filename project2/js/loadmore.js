import getId from './getId.js'
import incompleteLoad from './incomplete-load.js'
import completeLoad from './complete-load.js'
import getBtnList from './get-btn.js'
import importStorage from './get-storage.js'

export default function loadmoreBtn(data=importStorage()) {
  const getBtn = () => {
    getBtnList('delete')
    getBtnList('change')
    getBtnList('selesai')
  }

  let max_incomplete = 5
  getId('load-belum').addEventListener(
    'click',
    () => {
      max_incomplete = max_incomplete + 5
      incompleteLoad(max_incomplete,data)
      getBtn()
    },
    false
  )

  let max_complete = 5
  getId('load-sudah').addEventListener(
    'click',
    () => {
      max_complete = max_complete + 5
      completeLoad(max_complete,data)
      getBtn()
    },
    false
  )
}
