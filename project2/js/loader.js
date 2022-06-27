import getId from './getId.js'
import splitStatus from './split-status.js'
import resultSplit from './result-split.js'

export default function loadData(max = 5, data, jenis, target, load_target) {
  getId(target).innerHTML = ''
  if (load_target === 'load-belum') {
    const data_result = splitStatus(data).data_false
    resultSplit(max, data_result, jenis, target, load_target)
  }else{
    const data_result = splitStatus(data).data_true
    resultSplit(max, data_result, jenis, target, load_target)
  }
}
