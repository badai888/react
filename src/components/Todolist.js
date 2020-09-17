import React,{Component,createRef} from 'react'

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
    <button ref={this.btn}>按钮</button>
     <button ref={(btn2)=>this.ol=btn2}>按钮2</button>
      </>
    )
  }
  componentDidMount(){
    console.log(this.btn.current)
    console.log(this.ol)
  }

}

