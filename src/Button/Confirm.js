import React, { Component } from 'react'
import './Button.css'

export default class Confirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color : "aquamarine",
            title: "Xác nhận",
            handleClick: handleClickConfirm,
        };
    }
  render() {
    return (
      <div className='button' style={{backgroundColor:this.state.color}} onClick={this.state.handleClick}>{this.state.title}</div>
    )
  }
}

function handleClickConfirm() {
    alert("Đã xác nhận")
}