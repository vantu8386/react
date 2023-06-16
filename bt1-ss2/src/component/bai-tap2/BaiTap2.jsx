import React, { Component } from "react";

export default class BaiTap2 extends Component {
  constructor() {
    super();
    this.state = {
      vanBan: "học react-JS",
      flag: true,
    };
  }
//   handleClick = () => {
//     this.setState({
//       flag: !this.state.flag,
//     });
//   };

handleClick = () => {
    this.setState({
      vanBan: "Học javascript"
    });
}
  render() {
    return (
      <div>
        <p>{this.state.vanBan} </p>
        <button onClick={this.handleClick}>click</button>
        {/* {this.state.flag ? (
          <div>
            <p>Học react-JS</p>
            <button onClick={this.handleClick}>click</button>
          </div>
        ) : (
          <div>
            <p>Học js</p>
            <button onClick={this.handleClick}>click</button>
          </div>
        )} */}
      </div>
    );
  }
}
