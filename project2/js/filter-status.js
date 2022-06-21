export default function filterByStatus(data, value, resultId) {
  const results_post = document.getElementById(resultId)
  results_post.innerHTML = ''
  data
    .filter((item) => {
      return item.status.includes(value)
    })
    .forEach((e) => {
      const div = document.createElement('div')
      div.innerHTML = `
<ul>
  <li>${e.judul}</li>
</ul>
  `
      // <li>${e.penulis}</li>
      // <li>${e.tahun}</li>
      results_post.appendChild(div)
    })
}
