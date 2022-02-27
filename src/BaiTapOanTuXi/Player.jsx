import React, { Component } from "react";

export default class Player extends Component {
  // Component người chơi
  render() {
    return (
      <div className="text-center playerGame">
        <div className="theThink"></div>
        <div className="speech-bubble"></div>
        {/* Cho Hình ảnh của người chơi vào đây/ */}
        <img
          style={{ width: "200px", height: "200px" }}
          src="./img_OanTuXi/player.png"
          alt="PlayerGame"
        />

        {/* Cho thêm một cái class = row */}
        <div className="row">
          <div className="col-4">
            <button onClick={() => {}} className="btnItem">
              <img  style={{ width: '35px', height: '35px'}} src="./img_OanTuXi/keo.png" alt="ImgSource" />
            </button>
          </div>
          <div className="col-4">
            <button onClick={() => {}} className="btnItem">
              <img  style={{ width: '35px', height: '35px'}} src="./img_OanTuXi/bua.png" alt="ImgSource" />
            </button>
          </div>
          <div className="col-4">
            <button onClick={() => {}} className="btnItem">
              <img  style={{ width: '35px', height: '35px'}} src="./img_OanTuXi/bao.png" alt="ImgSource" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// Xây dựng hàm nhận sự kiện từ nút button và gửi lên Reducer
const mapDispatchToProps = (dispatch) => {}
