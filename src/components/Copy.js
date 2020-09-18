import React, { Component } from 'react'

const Copy=(Com)=>{
  return class Copy extends Component {
  render() {
    return (
      <div>
        <Com {...this.props}></Com>
        <h3>我是版心</h3>
      </div>
    )
  }
}}
export default Copy