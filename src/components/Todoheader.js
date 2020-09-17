import React, { Component } from 'react'

export default class Todoheader extends Component {
  render() {
  
    return (
      <div>
        
      <input
       value={this.props.inputs}
      onChange={this.hand}
      ></input>
        <button onClick={this.change}>提交</button>
      </div>
    )
  }
  hand=(e)=>{
    let tar = e.target
    this.props.hand(tar.value)
    console.log(tar.value)
  }
  change=()=>{

    this.props.change()
  }
}
