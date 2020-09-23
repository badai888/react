import React, { Component } from 'react'
import {Switch,Route,Link} from 'react-router-dom'
import New from './Nes'
export default class About extends Component {
  render() {
    console.log(this.props)
    // const {history} = this.props
    return (
      <div>
        关于我们
        {/* 路由 */}
        {/* <button onClick={()=>{history.push('/About/new/6')}}>new</button> */}
        {/* <Link to="/About/new/9">跳转</Link> */}
        {/* query传参 */}
        {/* <button onClick={()=>{}}></button> */}
      <button onClick={this.enter}>跳转</button>

      {/* <Link to={ {pathname:'/About/new',state:{id:2}} }>新闻</Link> */}
      <Link to={{pathname:'/About/new',state:{id:6}}}>跳转2</Link>
        <Switch>
        <Route path="/About/new" component={New}></Route>
        <Route ></Route>
        </Switch>
      </div>
    )
  }
  enter=()=>{
    this.props.history.push({
      pathname:'/About/new',
      state:{id:2}
    })
  }
}
