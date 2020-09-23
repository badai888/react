import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
 class our extends Component {
  render() {

    return (
      <div>
        <h2>我是非路由组件</h2>
      </div>
    )
  }
  componentDidMount(){
    console.log(this.props)
  }
}
export default withRouter(our)
