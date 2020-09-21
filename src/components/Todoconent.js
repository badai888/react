import React, { Component } from 'react'
// import Copy from './Copy'
export default class Todoconent extends Component {
  render() {
    return (
      <div>
        {this.props.title}
        <h1>我是b页面</h1>
       {
        this.props.arr.map((el,index)=>{
          return(
            <div key={index}>
              {el.input}
              <button onClick={()=>{this.del(index)}}>删除</button>
          <button onClick={()=>{this.qie(index)}}>{this.props.arr.isshoe?"完成":"未完成"}</button>
            </div>
          )
        })
       }
      </div>
    )
  }
  del=(index)=>{
    this.props.del(index)
  }
  qie=(index)=>{
    this.props.qie(index)
  }
}
