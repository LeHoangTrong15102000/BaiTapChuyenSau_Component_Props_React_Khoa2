import React, { Component } from 'react';
import './BaiTapOanTuXi.css';
import Computer from './Computer';
import Player from './Player';
import ThongTinTroChoi from './ThongTinTroChoi';

export default class BaiTapOanTuXi extends Component {
  render() {
    return (
      <div className="gameOanTuXi">
        <div className="row text-center mt-5">
          <div className="col-4">
            {/* Để player hình ảnh -> sẽ tách nó ra thành một component  */}
            <Player />
          </div>

          <div className="col-4">
            <ThongTinTroChoi />
            <button className="btn btn-success p-2 mt-5 display-4">
              Play game
            </button>
          </div>

          <div className="col-4">
            {/* Cũng sẽ tách nó ra thành một component */}
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}
