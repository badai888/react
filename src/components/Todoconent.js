import React,{Component} from 'react'
export default class extends Component{
  constructor(){
  super();
  this.state ={
    
  }
}
render(){
  return(
    <div>
        {this.props.arr.map((el,index)=>{
          return(
            <p className="bigbox" key={index}>{el.inputs}
            <span className={el.isclick?"succ":'shib'}>{el.isclick?'已完成':"未完成"}</span>
            <button onClick={()=>{this.del(index)}}>删除</button>
            </p>
          )
        })
        }
     
    </div>
  )
}
del=(index)=>{
  this.props.del(index)
}
}