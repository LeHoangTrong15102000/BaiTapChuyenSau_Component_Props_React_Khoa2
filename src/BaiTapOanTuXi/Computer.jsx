import React, { Component } from 'react';

export default class Computer extends Component {
  // Component giành cho máy
  render() {
    return (
      <div className="text-center playerComputer">
        <div className="theThink">
          <img
            className="mt-5"
            style={{ width: '50px', height: '50px' }}
            src="./img_OanTuXi/bao.png"
            alt="ImgDefault"
          />
        </div>
        <div className="speech-bubble"></div>
        {/* Cho hình ảnh của máy vào đây */}
        <img
          style={{ width: '150px', height: '150px' }}
          src="./img_OanTuXi/playerComputer.png"
          alt="PlayerComputer"
        />
      </div>
    );
  }
}
