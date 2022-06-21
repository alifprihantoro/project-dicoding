const id_form = document.getElementById('inputBook')
const search = document.getElementById('searchBook')

// form add book
export const getForm = () => {
  const judul = id_form.elements['inputBookTitle'].value
  const penulis = id_form.elements['inputBookAuthor'].value
  const tahun = id_form.elements['inputBookYear'].value
  const status = id_form.elements['inputBookIsComplete'].checked
  // console.log(`
  //   judul : ${judul}
  //   penulis : ${penulis}
  //   tahun : ${tahun}
  //   sudah dibaca : ${status}
  //   `);
  return {
    judul,
    penulis,
    tahun,
    status,
  }
}

// form search
export const getSearch = () => {
  const search_val = search.elements['searchBookTitle'].value
  // console.log(search_val);
  id_form.reset()
  return search_val
}
