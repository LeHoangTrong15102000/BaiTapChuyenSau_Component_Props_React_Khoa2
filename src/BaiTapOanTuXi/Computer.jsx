import React, { Component } from 'react'

export default class Computer extends Component {

    // Component giành cho máy
  render() {
    return (
      <div className="text-center playerComputer">
        <div className="theThink"></div>
        <div className="speech-bubble"></div>
          {/* Cho hình ảnh của máy vào đây */}
        <img style={{ width: '200px' , height: '200px'}} src="./img_OanTuXi/playerComputer.png" alt="PlayerComputer"/>
      </div>
    )
  }
}
