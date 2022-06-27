import getId from './getId.js'
import importStorage from './get-storage.js'
import loadData from './loader.js'
import getBtn from './getBtnList.js'

const getData = ()=>{
  return importStorage()
}
export default function loadmoreBtn(data=getData) {
  let max_incomplete = 5
  getId('load-belum').addEventListener(
    'click',
    () => {
      max_incomplete = max_incomplete + 5
      loadData(max_incomplete, data, 'show', 'incompleteBookshelfList', 'load-belum')
      getBtn()
    },
    false
  )

  let max_complete = 5
  getId('load-sudah').addEventListener(
    'click',
    () => {
      max_complete = max_complete + 5
      loadData(max_complete, data, 'show', 'completeBookshelfList', 'load-sudah')
      getBtn()
    },
    false
  )
}
