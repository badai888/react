import React,{Component} from 'react'
import Todoconent from './Todoconent'
import Todoheader from './Todoheader'
import {change,add, del,qie} from '../storer/actions'
import store from '../storer';
export default class Todolist extends Component {

  constructor(){
    super();
    this.state={
      ...store.getState()
    }
    store.subscribe(()=>{
      this.setState(store.getState())
    })

  }
  render(){
    return(
      <>
            <Todoheader
            value='iii'
            change={this.changey}
            input={this.state.input}
            add={this.add}
    
            />
          <Todoconent
            title="我是ace"
            arr={this.state.arr}
            del={this.del} 
            qie={this.qie}
          />
      </>
    )
  }
  changey=(value)=>{
    store.dispatch(change(value))
  }
  add=()=>{
    store.dispatch(add(this.state.input))
  }
  del=(index)=>{
    store.dispatch(del(index))
  }
  qie =(index)=>{
    store.dispatch(qie(index))
  }

}

