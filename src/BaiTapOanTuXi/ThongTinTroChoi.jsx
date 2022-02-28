import React, { Component } from 'react';

export default class ThongTinTroChoi extends Component {
  render() {
    return (
      <div>
        <div className="display-4 text-warning">Bạn thua rồi!!!</div>
        <div style={{ fontSize: '40px' }} className="text-success mt-5">
          Số bàn thắng:
          <span className="text-warning ml-2">0</span>
        </div>
        <div style={{ fontSize: '40px' }} className="text-secondary">
          Số bàn thua:
          <span className="text-info ml-2">0</span>
        </div>
      </div>
    );
  }
}
