import React,{Component} from 'react'
import Todoconent from './Todoconent'
import Todoheader from './Todoheader'
import './cd.css'
export default class Todolist extends Component {
  constructor(){
    super();
    this.state={
      inputs:"",
     arr:[]
     
    }

  }
  render(){
    return(
      <div>
        <Todoheader 
        title="留言板"
        inputs={this.state.inputs}
        change={this.add}
        hand={this.hand}
        />
        <Todoconent
        del={this.del}
        arr={this.state.arr}
        />
      </div>
    )
  }
  hand=(value)=>{
    //填充
    this.setState({
      inputs:value
  
    })
   
  }
add=()=>{
  //增加
  let todo={
    inputs:this.state.inputs,
    isclick:false
  }
  let arr =this.state.arr
  arr.unshift(todo)
  console.log(arr)
  this.setState({
    arr,
    inputs:""//清空input
  })
  }
  del=(index)=>{
      let arr=this.state.arr
      arr.splice(index,1)
      this.setState({
        arr
      })
  }
}

