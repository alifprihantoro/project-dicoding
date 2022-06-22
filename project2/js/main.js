import showData from './show.js'
import './search.js'
import importStorage from './get-storage.js'
import addBtn from './push-data.js'
showData(importStorage())
addBtn()
