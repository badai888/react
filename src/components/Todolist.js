import React,{Component} from 'react'
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
        {/* <button onClick={()=>{this.setState({num:2})}} >111</button> */}
        {/* <button onClick={this.hand.bind(this)}>3</button> */}
        {/* <button onClick={this.hed}>4</button> */}
        <button onClick={this.hed}>5</button>
        {this.state.num}

      </div>
    )
  }

  hed=()=>{
    this.setState({
      num:5
    })
  }
}