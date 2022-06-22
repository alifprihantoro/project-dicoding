import changeForm from "./change-form.js"
import changeSubmitBtn from "./submit-change.js"
import getId from "./getId.js"

export default function changeThisList(id) {
  // console.log('change')
  getId('btn-form').innerHTML = `
<button id="book-submit-change" type="submit">change</button>
<button id="bookSubmit" type="submit">submit</button>
`
  changeForm(id)
  changeSubmitBtn(id)
}
