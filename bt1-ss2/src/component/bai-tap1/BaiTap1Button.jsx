import React, { Component } from 'react'

export default class BaiTap1Button extends Component {
  render() {
    return (
      <div>
        <p>Bây giờ là: {this.state.value} </p>
        <button onClick={this.handleStart}>Start</button>
        <button onClick={this.handleStop}>Stop</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}
