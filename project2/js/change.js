import changeForm from './change-form.js'
import changeSubmitBtn from './submit-change.js'
import cancelChange from './cancel-change.js'
import changeBtnHtml from './change-btn.js'

export default function changeThisList(id) {
  changeBtnHtml()
  changeForm(id)
  changeSubmitBtn(id)
  cancelChange()
}
