import importStorage from './get-storage.js'
import deleteThisList from './delete.js'
import changeThisList from './change.js'
import loopBtn from './loop-btn.js'
import checkedBtn from './checked-btn.js'
import loadData from './loader.js'

export default function showData(
  max = 5,
  data = importStorage(),
  jenis = 'show'
) {
  loadData(max, data, jenis, 'incompleteBookshelfList', 'load-belum')
  loadData(max, data, jenis, 'completeBookshelfList', 'load-sudah')
  loopBtn(deleteThisList, 'delete')
  loopBtn(changeThisList, 'change')
  loopBtn(checkedBtn, 'selesai')
}
