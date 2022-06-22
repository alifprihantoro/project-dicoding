import deleteThisList from "./delete.js"
import changeThisList from "./change.js"

export default function getBtnList(classNameBtn) {
  const getClassName = document.getElementsByClassName(classNameBtn)
  if (classNameBtn === 'delete') {
    for (var i = 0; i < getClassName.length; i++) {
      const get_id_list_book = getClassName[i].parentNode.parentElement.getAttribute('value')
      getClassName[i].addEventListener('click',()=>deleteThisList(get_id_list_book), false)
    }
  } else {
    for (var i = 0; i < getClassName.length; i++) {
      const get_id_list_book = getClassName[i].parentNode.parentElement.getAttribute('value')
      getClassName[i].addEventListener('click', ()=>changeThisList(get_id_list_book), false)
    }
  }
}
