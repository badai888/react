import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        <button onClick={this.enter}>登陆</button>
        
      </div>
    )
  }

  enter=()=>{
   localStorage.setItem("sks","true")
   if(this.props.location.state){
     this.props.history.push(this.props.location.state.from)
   }else{
     this.props.history.push('/home')
   }
  }
}
