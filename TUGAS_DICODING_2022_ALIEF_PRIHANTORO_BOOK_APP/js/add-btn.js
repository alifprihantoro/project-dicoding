import getId from './getId.js'

getId('add-data').addEventListener(
  'click',
  () => {
    getId('form').classList.toggle('hide')
  },
  false
)
