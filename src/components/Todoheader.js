import React, { Component } from 'react'

 class Todoheader extends Component {
  render() {
    return (
      <div>
       
        <div className="center-block"  style={ {maxWidth:600} }>
        {this.props.title}
        <div className="row">
          <div className="col-md-10 col-sm-10">
            <input value={this.props.input} onChange={this.changew}></input>
          </div>
          <div className="col-md-2 col-sm-2">
            <button type="button" className="btn  btn-success" onClick={this.addu}>提交</button>
          </div>
        </div>
      </div>
        
      </div>
    )
  }
  changew=(e)=>{
    //刷新input
    this.props.change(e.target.value)
  }
  addu=()=>{
    //增加
    this.props.add()
  }
}
export default Todoheader 