import React from 'react' // jsx 解析js中的标签（解析成js对象）
import reactDom from 'react-dom'
import App from './App'
import texte from './components/context'
reactDom.render(
  <texte.Provider value={
   { a:10,
    b:15,
    act(){
      alert(5)
    }}
  }>
  <App/>
  </texte.Provider>
  , 
  document.querySelector('#root')
)