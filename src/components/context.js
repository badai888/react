import React, { Component,createContext } from 'react'
const contetx = createContext()
 class Context extends Component {
  constructor(){
    super()
    this.state={
      a:1,
      b:2

    }
  }
  render() {
    return (
      <div>
        <contetx.Provider value={{...this.state,act:this.add}}>
        {this.props.children}
        </contetx.Provider> 
      </div>
    )
  }
  add=(num)=>{
   this.setState({
     a:num
   })
  }
}
let ContextProvider =Context;
let ContextConsumer = contetx.Consumer
export {
  ContextProvider,
  ContextConsumer
}
