import React,{Component} from 'react'
export default class extends Component{
  constructor(){
  super();
  this.state ={
    num:1,
    ishow:true,
    arr:[
      {
        name:'小明',
        age:12,
        gender:'女'
      },
      {
        name:'小7',
        age:18,
        gender:'女'
      },
      {
        name:'小9',
        age:16,
        gender:'男'
      }
    ],
    richText:`
    <div>
      我是富文本
      <h3>标题</h3>
      <button>按钮</button>
    </div>
  `
  }
}
render(){
  return(
    <div>
      <button onClick={(e)=>{this.hand(e,1)}}>
        11
      </button>
      {
        this.state.ishow
        ?
        <div>真的</div>
        :
        <div>假的</div>
      }
      <button onClick={
         ()=>{this.setState({ishow: !this.state.ishow})}
         }> 按钮</button>
        {
          this.state.arr.map((el,index)=>{
            return (
              <li key={index}>
                <h1>{el.name}</h1>
                <h2>{el.age}</h2>
                <h3>{el.gender}</h3>
              </li>
            )
          })
        }
        {
          this.state.richText
        }
        <div dangerouslySetInnerHTML={{__html:this.state.richText}}></div>
      {this.state.num}
      { 
      this.state.arr.map((el,index)=>{
        return (
          <li key={index}>
            {el.name}
          </li>
        )
      })
     
      }

    </div>
  )
}
// hand=(e,num)=>{
//   console.log(e.target) 
//   e.target.style.background="red"
//   alert(num)
// }
}