import React,{Component} from 'react'
import Con from './Todoconent'
import './cd.css'
export default class Todolist extends Component {
  constructor(){
    super();
    this.state={
      isLike:true,
      num:0,
      arr:[
        {
          name:'1',
          title:'一'
        },
        {
          name:'2',
          title:'二'
        },
        {
          name:'3',
          title:'三'
        }
      ]
    }

  }
  render(){
    return(
      <div>
        <Con/>
        {this.state.arr.map((el,index)=>{
          return (
          <button
          className={index===this.state.num?"box":""}
          onClick={()=>{this.qie(index)}}
          key={index}>{el.name}</button>
          )
        })}
        {
          this.state.arr.map((el,index)=>{
            return (         
              index===this.state.num
                  ?
              <div className="boy">{el.title}</div>
              :
              ""
              
            )
          })
        }

      </div>
    )
  }
  qie=(num) => {
    this.setState({
      num
    })
  }

}