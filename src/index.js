import React from 'react' // jsx 解析js中的标签（解析成js对象）
import reactDom from 'react-dom'
import App from './App'
import { HashRouter as Router } from 'react-router-dom'

reactDom.render(
<Router>
  <App/>
</Router>
  , 
  document.querySelector('#root')
)