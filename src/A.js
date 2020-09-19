import React, { Component } from 'react'
import store from "./store.js"
console.log(store.getState())
export default class A extends Component {
  constructor(){
    super();
    this.state={
      ...store.getState()
    }
    store.subscribe(()=>{
      this.setState(store.getState())
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.add}>+</button>
        {this.state.num}
        <button onClick={this.del}>-</button>
      </div>
    )
  }
  add=()=>{
    store.dispatch({
      type:"addnum",
      value:3
    })
  }
  del=()=>{
    store.dispatch({
      type:'delnum',
      value:3
    })
  }
}
