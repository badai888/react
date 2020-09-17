import React, { Component } from 'react'
import {Conconsumer} from './context'
export default class Todoheader extends Component {
  render() {
  
    return (
      <div>
       <Conconsumer>
         {
           (obj)=>{
             return(
               <div>
                 {obj.a}
               </div>
             )
           }
         }
       </Conconsumer>
    
      </div>
    )
  }

}
