import getId from './getId.js'
import resultList from './result-list.js'

export default function resultSplit(max, data, jenis, target, load_target) {
  const data_slice = data.slice(0, max)
  const status = load_target === 'load-belum' ? 'selesai' : 'belum'
  resultList(data_slice, target, status)

  const id = load_target === 'load-sudah' ? 'count-result-selesai' : 'count-result-belum'
  const status_info = load_target === 'load-sudah' ? 'sudah' : 'belum'
  const info = data.length == 0 ? '' : `<div class='info'>terdapat <span>"${data.length}"</span> buku yang ${status_info} dibaca</div>`
  getId(id).innerHTML = info

  if (data.length > max) {
    getId(load_target).innerHTML = '<button>loadmore</button>'
  } else {
    getId(load_target).innerHTML = ''
  }

  if (data.length == 0 && jenis === 'search') {
    const myHtml = `<div class='info'>OOOPPSS... DATA TIDAK DITEMUKAN</div>`
    getId(target).innerHTML = myHtml
  } else if (data.length == 0 && jenis === 'show') {
    const myHtml = `<div class='info'>Data kosong. Silahkan Tambahkan data.<button id="add-data">Add Data</button></div>`
    getId(target).innerHTML = myHtml
  }
}
