export default function loopBtn(func,classNameBtn) {
  const getClassName = document.getElementsByClassName(classNameBtn)
  for (var i = 0; i < getClassName.length; i++) {
    const get_id_list_book = getClassName[i].parentNode.parentElement.getAttribute('value')
    getClassName[i].addEventListener(
      'click',
      () => func(get_id_list_book),
      false
    )
  }
}
