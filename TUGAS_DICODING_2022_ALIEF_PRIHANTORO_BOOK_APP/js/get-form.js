import getId from './getId.js'

const id_form = getId('inputBook')
const search = getId('searchBook')

export const getForm = () => {
  const judul = id_form.elements['inputBookTitle'].value
  const penulis = id_form.elements['inputBookAuthor'].value
  let tahun = id_form.elements['inputBookYear'].value
  const status = id_form.elements['inputBookIsComplete'].checked
  const id = Date.now()
  if (tahun === '') {
    // ubah agar sama
    const today = new Date()
    tahun = today.getFullYear()
  }
  // if judul, penulis, kosong => return error
  // confirm with title
  return {
    id,
    judul,
    penulis,
    tahun,
    status,
  }
}

export const getSearch = () => {
  const search_val = search.elements['searchBookTitle'].value
  id_form.reset()
  return search_val
}
