import React, { Component } from 'react'
import texte from './context'
export default class Todoheader extends Component {
  render() {
  
    return (
      <div>
        <texte.Consumer>
        {
          (obj)=>{
            return(
              <div>
                {obj.act()}
              </div>
            )
          }
        }

        </texte.Consumer>
    
      </div>
    )
  }

}
