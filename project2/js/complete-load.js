import getId from './getId.js'
import resultList from './result-list.js'

export default function completeLoad(max = 5,data,jenis) {
  getId('completeBookshelfList').innerHTML = ''
  let complete = 1
  data.forEach((e) => {
    if (e.status == true && complete <= max) {
      resultList(e, 'completeBookshelfList')
      getId('load-sudah').innerHTML = ''
      complete++
    }
  })
  if (complete > max) {
    getId('load-sudah').innerHTML = '<button>loadmore</button>'
  }
  console.log(complete)
  if (complete < 2 && jenis === 'search') {
    const myHtml = `<div class='notfound'>OOOPPSS... DATA TIDAK DITEMUKAN</div>`
    getId('completeBookshelfList').innerHTML = myHtml
  } else if (complete < 2 && jenis === 'show') {
    const myHtml = `<div class='notfound'>Data kosong. Silahkan Tambahkan data.<button id="add-data">Add Data</button></div>`
    getId('completeBookshelfList').innerHTML = myHtml
  }
}
