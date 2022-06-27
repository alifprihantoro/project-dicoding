export default function myHtmlList(e,status) {
  return `
<div class='content'>
  <h3>${e.judul}</h3>
  <div class='info'>
    <h4>${e.penulis}</h4>
    <h4>${e.tahun}</h4>
  </div>
</div>
<div class='btn-list'>
  <button class='delete' type="submit"/>
  <button class='change' type="submit"></button>
  <br/>
  <button class='selesai' type="submit">Taruh di list ${status} baca</button>
</div>
  `
}
