import React, { Component } from "react";
import BaiTap2 from './bai-tap2/BaiTap2';
import BaiTap3 from "./bai-tap3/BaiTap3";
import BaiTap1Clock from "./bai-tap1/BaiTap1Clock";


export default class ParentComp extends Component {
  render() {
    return (
      <div>
        {/* <BaiTap2/> */}
        <BaiTap3/>
        {/* <BaiTap1Clock/> */}
      </div>
    );
  }
}
