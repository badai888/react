import React, { Component } from 'react'
import texte from './context'
export default class Todoconent extends Component {
  render() {
    return (
      <div>
        <texte.Consumer>
        {
          ({a,b})=>{
            return (
              <div>
                {a}
              </div>
            )
          }

        }
        </texte.Consumer>
        
      </div>
    )
  }
}
