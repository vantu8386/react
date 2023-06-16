import React, { Component } from "react";
import BaiTap1Time from "./BaiTap1Time";
import BaiTap1Button from "./BaiTap1Button";

export default class BaiTap1Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      isRuning: true,
    };
  }

  // Viết 3 hàm : handleStart, handleStop, handleRestart

  handleStart = () => {
    setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }));
    }, 1000);
    this.setState({isRuning:true});
  };

  render() {
    const { time } = this.state;
    return (
      <div>
        <BaiTap1Time time={time} />
        <BaiTap1Button />
      </div>
    );
  }
}
