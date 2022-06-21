export const storageAdd = (data_book) => {
  if (typeof Storage !== 'undefined') {
    localStorage.setItem(data_book.judul,JSON.stringify(data_book))
  } else {
    alert('Maaf browser anda tidak suport dengan session storage!')
  }
}
