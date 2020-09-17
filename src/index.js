import React from 'react' // jsx 解析js中的标签（解析成js对象）
import reactDom from 'react-dom'
import App from './App'
import {Conprovider} from './components/context'
reactDom.render(
  <Conprovider>
  <App/>
  </Conprovider>
  , 
  document.querySelector('#root')
)