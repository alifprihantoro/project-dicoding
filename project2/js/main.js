import showData from './show.js'
import addBtn from './push-data.js'
import './search.js'
import loadmoreBtn from './loadmore.js'
import './add-btn.js'
import importStorage from './get-storage.js'
import getId from './getId.js'
import incompleteLoad from './incomplete-load.js'
import completeLoad from './complete-load.js'

showData()
addBtn()
loadmoreBtn()
const data = importStorage()
getId('refres-data-belum').onclick = () => {
  incompleteLoad(5, data)
}
getId('refres-data-sudah').onclick = () => {
  completeLoad(5, data)
}
getId('refres-data-all').onclick = () => {
  incompleteLoad(5, data)
  completeLoad(5, data)
}
