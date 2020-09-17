import React,{Component} from 'react'
export default class extends Component{
  constructor(){
  super();
  this.state ={
  }
}
static getDerivedStateFromProps(props,state){
  let todo =props.arr.filter(el=>el.inputs)
  return {
    todo
    
  }
}
render(){

  console.log("渲染提交")
  
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
shouldComponentUpdate(nextProps,nextState){
  console.log(nextProps)
  console.log(nextState)
  console.log(this.state.inputs)
  return nextProps.arr.inputs !== this.state.inputs
}

del=(index)=>{
  this.props.del(index)
}
}