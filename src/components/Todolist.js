import React, { Component } from 'react'
import Todoconent from './Todoconent'
import Todoheader from './Todoheader'
import store from '../store'
// import {connect} from 'react-redux'
import {change , del,qie,add} from '../store/reducers/Reducera/action'

export default class Todolist extends Component {
  constructor(){
    super()
    this.state={
      ...store.getState().todo
    }
    console.log(store.getState().todo)
    store.subscribe(()=>{
      this.setState(store.getState())
    })
  }
  render() {
    return (
      <div>
      < Todoheader 
      title="今日事，今日毕"
      input={this.state.input}
      change={this.change}
      add={this.add}
      />
       <Todoconent
       del={this.del}
       arr={this.state.arr}
       qie={this.qie}
       />
      </div>
    )
  }
  change=(value)=>{
  // this.setState({
  //   input:value
  // })

  store.dispatch(change(value))
  // this.props.change(value)
  }
  add=()=>{
    //增加
    store.dispatch(add(this.state.input))
    // this.props.add(this.props.input)

  //  let todos={
  //     input:this.state.input,
  //     isshow:true
  //   }
  //   // let arr=this.state.arr
  //   this.state.arr.unshift(todos)
  //   this.setState({
  //     todos,
  //     input:""
  //   })
    
    // console.log(this.state)
  }
  del=(index)=>{
//删除
  store.dispatch(del(index))
  // this.props.del(index)

  //  let arr= this.state.arr
  //  arr.splice(index,1)
  //   this.setState({
  //     arr
  //   })
  }
  qie=(index)=>{
    // let da =this.state.arr[index].isshow=!this.state.arr[index].isshow
      
    // store.dispatch(qie(index))
    // let arr =this.state.arr
    // arr[index].isshow=!arr[index].isshow
    // this.setState({
    //   arr
    // })
    store.dispatch(qie(index))
    // this.props.qie(index)

  }
}
//提交数据
// const mapStateToProps = (state)=>{
//   console.log(state)
//   return {
//     input:state.todo.input,
//     arr:state.todo.arr
//   }
// }
//提交方法
// const mapDispathToProps = (dispatch)=>{
//   return {
//     change(value){
//       dispatch(change(value))
//     },
//     add(input){
//       dispatch(add(input))
//     },
//     del(index){
//       dispatch(del(index))
//     },
//     qie(index){
//       dispatch(qie(index))
//     }
//   }
// }
// export default connect(mapStateToProps,mapDispathToProps)(Todolist)

