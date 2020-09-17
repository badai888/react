import React,{Component,createRef} from 'react'
import Todoconent from './Todoconent'
import Todoheader from './Todoheader'
export default class Todolist extends Component {

  constructor(){
    super();
    this.btn=createRef()
    this.state={
    }

  }
  render(){
    return(
      <>
      <Todoconent/>
      <Todoheader/>
      </>
    )
  }
}

