import getId from "./getId.js"

export default function changeBtnHtml() {
  getId('btn-form').innerHTML = `
<button id="book-submit-change" type="submit">change</button>
<button id="book-cancel-change" type="submit">Cancel</button>
`
}
