import React,{Component} from 'react'
import Con from './Todoconent'
import Todoheader from './Todoheader'
export default class Todolist extends Component {
  constructor(){
    super();
    this.state={
      isLike:true,
      num:1
    }
    // this.hed =this.hed.bind(this)
  }
  render(){
    return(
      <div>
        <Todoheader/>
        <Con/>
        {/* <button onClick={()=>{this.setState({num:2})}} >111</button> */}
        {/* <button onClick={this.hand.bind(this)}>3</button> */}
        {/* <button onClick={this.hed}>4</button> */}
        <button onClick={this.hed}>5</button>
        <button onClick={this.ohj.bind(this)}>6</button>
        {this.state.num}
      </div>
    )
  }
  ohj(){
    this.setState({
      num:6
    })
  }
  hed=()=>{
    this.setState({
      num:5
    })
  }
}