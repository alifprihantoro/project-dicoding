import getId from './getId.js'
import resultList from './result-list.js'

export default function incompleteLoad(max = 5,data,jenis) {
  getId('incompleteBookshelfList').innerHTML = ''
  let incomplete = 1
  data.forEach((e) => {
    if (e.status == false && incomplete <= max) {
      resultList(e, 'incompleteBookshelfList')
      getId('load-belum').innerHTML = ''
      incomplete++
    }
  })
  if (incomplete > max) {
    getId('load-belum').innerHTML = '<button>loadmore</button>'
  }
  if (incomplete < 2 && jenis === 'search') {
    const myHtml = `<div class='notfound'>OOOPPSS... DATA TIDAK DITEMUKAN</div>`
    getId('incompleteBookshelfList').innerHTML = myHtml
  } else if (incomplete < 2 && jenis === 'show') {
    const myHtml = `<div class='notfound'>Data kosong. Silahkan Tambahkan data, atau import data.</div>`
    getId('incompleteBookshelfList').innerHTML = myHtml
  }
}
