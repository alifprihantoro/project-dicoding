import showData from './show.js'
import importStorage from './get-storage.js'
import addBtn from './push-data.js'
import './search.js'
import './loadmore.js'

showData(importStorage())
addBtn()
