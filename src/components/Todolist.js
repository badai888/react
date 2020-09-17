import React,{Component} from 'react'
import Con from './Todoconent'
import Todoheader from './Todoheader'
export default class Todolist extends Component {
  constructor(){
    super();
    this.state={
      isLike:true,
      num:1,
      arr:[
        {
          name:'小明',
          age:12,
          gender:'女'
        },
        {
          name:'小7',
          age:18,
          gender:'女'
        },
        {
          name:'小9',
          age:16,
          gender:'男'
        }
      ],
    }
    // this.hed =this.hed.bind(this)
  }
  render(){
    return(
      <div>
        {
          this.state.arr.map((el,index)=>{
            return (
            <button 
            className={index===this.state.num?'boxe':''}
            key={index}
            onClick={()=>{this.setState({num:index})}}>{el.name}</button>
            )
          })
        }
        {
          this.state.arr.map((el,index)=>{
           return(
           this.state.num=== index
             &&
            <div>{el.age}</div>
           )
          })
        }
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