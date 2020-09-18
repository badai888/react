import React, { Component } from 'react'
import {ContextConsumer} from './context'
export default class Todoheader extends Component {
  render() {
    return (
      <div>
   <ContextConsumer>
     {
       (obj)=>{
         return (
           <div>
             {obj.a}
          <button onClick={()=>{obj.act(5)}}>切换</button>
           </div>
         )
       }
     }
   </ContextConsumer>
      </div>
    )
  }
}
