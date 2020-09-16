import React, { Component } from 'react'

export default class Todoheader extends Component {
  constructor(){
    super()
    this.state = {
      num:0,
      arr:[
        {
          title:'1',
          content:'一'
        },
        {
          title:'2',
          content:'二'
        },
        {
          title:'3',
          content:'三'
        }
      ]
    }
  }
  render() {
    return (
      <div>
        {
          this.state.arr.map((el,index)=>{
            return (
              <button key={index}
              className={index===this.state.num?'box':''}
              onClick={
                ()=>{ this.setState({num : index})}
                // ()=>{ this.hader(index)}
              }
              >
                {el.title}
              </button>
            )
          })
        }
        {
          this.state.arr.map((el,index)=>{
            return(
              this.state.num ===index
              &&
              <div className='nop' key={index}>
                {el.content}
              </div>
            )
          })
        }
        
      </div>
    )
  }
  // hader=(r)=>{
  //   this.setState({
  //     num:r
  //   })

  // }
}
