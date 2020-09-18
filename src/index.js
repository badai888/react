import React from 'react' // jsx 解析js中的标签（解析成js对象）
import reactDom from 'react-dom'
import App from './App'
 import {ContextProvider} from './components/context'
reactDom.render(
 <ContextProvider>
  <App/>
 </ContextProvider>
  , 
  document.querySelector('#root')
)