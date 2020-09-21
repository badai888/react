import React, { Component } from 'react'

export default class Todoconent extends Component {
  render() {
    return (
    
        <div className="center-block"  style={ {maxWidth:600} }>
          <ul>
          {
            this.props.arr.map((el,index)=>{
              return(
                <div className="col-md-12" key={index}>
                  {el.input}
                 <div type="button" className="btn btn-danger" onClick={()=>{this.del(index)}}>删除</div>
                 <div className={el.isshow?"btn btn-success":"btn btn-danger"} onClick={()=>{this.qie(index)}} >{el.isshow?"已完成":"未完成"}</div>
                </div>
              )
            })
          }
          </ul>
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
