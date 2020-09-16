import React,{Component} from 'react'
export default class extends Component{
  constructor(){
  super();
  this.state ={
    num:1
  }
}
render(){
  return(
    <div>
      <button onClick={(e)=>{this.hand(e,1)}}>
        11
      </button>
      {this.state.num}

    </div>
  )
}
// hand=(e,num)=>{
//   console.log(e.target) 
//   e.target.style.background="red"
//   alert(num)
// }
}