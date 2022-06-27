export default function importStorage() {
  const data=JSON.parse(localStorage.getItem('data_book'))
  if (data == null) {
    return []
  }else{
  return data
  }
}
