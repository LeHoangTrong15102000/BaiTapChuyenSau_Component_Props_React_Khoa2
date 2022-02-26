import React, { Component } from 'react';
import './BaiTapLacXiNgau.css';
import XucXac from './XucXac';
import ThongTinTroChoi from './ThongTinTroChoi';

export default class BaiTapLacXiNgau extends Component {
  // Ôn tập redux lại một lần nữa
  render() {
    return (
      <div className="game">
        <div className="title-game text-center mt-5 display-4">
          Bài Tập Game Xí Ngầu
        </div>

        {/* chúng ta thấy 3 phần này nó render đi , render lại thì chúng ta có thể
        tách nó ra thành một component riêng 
        
          -  2 cái xí ngầu lớn sẽ là 2 nút button để chúng ta nhấn vào
          - Cho text-center tại row thì tất cả các thằng tại row nó sẽ nhảy vào giữa hết.
          -
        */}
        <div className="row mt-5">
          <div className="col-5 text-right">
            <button className="btnGame">TÀI</button>
          </div>
          <div className="col-2 text-center ">
            <XucXac />
          </div>
          <div className="col-5 text-left">
            <button className="btnGame">XỈU</button>
          </div>
        </div>

        <div className="thongTinTroChoi text-center mt-2">
          <ThongTinTroChoi />

          <button className="btn btn-success p-3 display-4 mt-5">
            Play game
          </button>
        </div>
      </div>
    );
  }
}
