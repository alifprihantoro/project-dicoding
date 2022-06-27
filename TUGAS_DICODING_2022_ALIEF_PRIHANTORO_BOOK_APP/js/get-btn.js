import deleteThisList from './delete.js'
import changeThisList from './change.js'
import loopBtn from './loop-btn.js'
import checkedBtn from './checked-btn.js'

export default function getBtnList(classNameBtn) {
  if (classNameBtn === 'delete') {
    loopBtn(deleteThisList,classNameBtn)
  } else if (classNameBtn === 'change') {
    loopBtn(changeThisList,classNameBtn)
  } else {
    loopBtn(checkedBtn,classNameBtn)
  }
}
