import React, { Component } from 'react'

export default class Todoheader extends Component {
  render() {
    return (
      <div>
        {this.props.input}
        <input value={this.props.input} onChange={this.changer}></input>
      <button onClick={this.add}>提交</button>
      </div>
    )
  }
  changer=(e)=>{
    let target = e.target;
    this.props.change(target.value)
  }
  add=()=>{
    this.props.add()
  }
}
