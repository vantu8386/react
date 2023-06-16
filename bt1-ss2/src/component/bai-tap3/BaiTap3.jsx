import React, { Component } from "react";

export default class BaiTap3 extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      displayValue: "",
    };
  }
  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleAdd = (e) => {
    e.preventDefault();
    const { inputValue } = this.state;
    this.setState({ displayValue: inputValue, inputValue: "" });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <button onClick={this.handleAdd}>Add</button>
          <p>{this.state.displayValue}</p>
        </form>
      </div>
    );
  }
}
