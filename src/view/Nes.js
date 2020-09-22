import React, { Component } from 'react'

export default class Nes extends Component {
  render() {
    return (
      <div>
          二级组件
          {this.props.location.state.id}
      </div>
    )
  }
}
