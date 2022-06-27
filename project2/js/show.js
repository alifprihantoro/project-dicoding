import incompleteLoad from './incomplete-load.js'
import completeLoad from './complete-load.js'
import importStorage from './get-storage.js'
import deleteThisList from './delete.js'
import changeThisList from './change.js'
import loopBtn from './loop-btn.js'
import checkedBtn from './checked-btn.js'

export default function showData(
  max = 5,
  data = importStorage(),
  jenis = 'show'
) {
  incompleteLoad(max, data,jenis)
  completeLoad(max, data,jenis)
  loopBtn(deleteThisList, 'delete')
  loopBtn(changeThisList, 'change')
  loopBtn(checkedBtn, 'selesai')
}
