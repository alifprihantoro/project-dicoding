import getId from './getId.js'

export default function btnSubmitHtml() {
  getId('btn-form').innerHTML = `
<button id="bookSubmit" type="submit">submit</button>
<button id="cancelSub">cancel</button>
`
}
