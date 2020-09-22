import React, { Component } from 'react'
import axios from 'axios'
import {demo} from '../api/homeapi'
export default class Home extends Component {
  render() {
    return (
      <div>
        Home页
        <button onClick={this.enter}>请求数据</button>
        <button onClick={this.deou}>数据情求</button>
      </div>
    )
  }
  enter=()=>{
    axios({
      url:'http://api.artgoer.cn:8084/artgoer/api/v1/user/324380/v3/topic/topicHomeByLabel?pageIndex=1&token=b544cd63-6d42-46fe-a96c-3cf96bae3113&topicId=62187',
        method:'get'
    }).then((ok)=>{
      console.log(ok)
    })
  }
  deou=()=>{
    demo().then((ok)=>{
      console.log(ok)
    }).catch((err)=>{
      console.log(err)
    })
  }
}
