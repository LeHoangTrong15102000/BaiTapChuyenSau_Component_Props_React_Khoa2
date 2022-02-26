import React, { Component } from 'react';

export default class XucXac extends Component {
  // làm React thì làm layout đã chiêm rất nhiều thời gian
  // React giải quyết component thì rất là tốt.
  render() {
    return (
      <div>
        <img
          style={{ width: '50px', height: '50px' }}
          src="./img_XucXac/1.png"
          className="ml-2"
          alt="GameXucXac"
        />
        <img
          style={{ width: '50px', height: '50px' }}
          src="./img_XucXac/2.png"
          className="ml-2"
          alt="GameXucXac"
        />
        <img
          style={{ width: '50px', height: '50px' }}
          src="./img_XucXac/3.png"
          className="ml-2"
          alt="GameXucXac"
        />
      </div>
    );
  }
}
