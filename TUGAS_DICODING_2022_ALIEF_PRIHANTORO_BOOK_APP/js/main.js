import showData from './show.js'
import addBtn from './push-data.js'
import './search.js'
import loadmoreBtn from './loadmore.js'
import './add-btn.js'
import importStorage from './get-storage.js'
import getId from './getId.js'
import loadData from './loader.js'

showData()
addBtn()
loadmoreBtn()
const data = importStorage()

// nav refres -------------------
getId('refres-data-belum').onclick = () => {
  loadData(5, data, 'show', 'incompleteBookshelfList', 'load-belum')
}
getId('refres-data-sudah').onclick = () => {
  loadData(5, data, 'show', 'completeBookshelfList', 'load-sudah')
}
getId('refres-data-all').onclick = () => {
  showData()
}
