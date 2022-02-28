import React, { Component } from 'react';
import { connect } from 'react-redux';

class Player extends Component {
  // Component người chơi

  // Viết mảng render ra Kéo búa bao
  renderOanTuXi = () => {
    return this.props.mangDatCuoc.map((item, index) => {
      // Xét giá trị đặt cược thêm viền cho item được chọn
      let border = {};

      if (item.datCuoc) {
        border = { border: '3px solid orange' };
      }
      return (
        <div key={index} className="col-4">
          <button onClick={() => {}} style={border} className="btnItem">
            <img
              style={{ width: '35px', height: '35px' }}
              src={item.hinhAnh}
              alt={item.hinhAnh}
            />
          </button>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="text-center playerGame">
        <div className="theThink">
          <img
            className="mt-5"
            style={{ width: '50px', height: '50px' }}
            src="./img_OanTuXi/keo.png"
            alt="ImgDefault"
          />
        </div>
        <div className="speech-bubble"></div>
        {/* Cho Hình ảnh của người chơi vào đây/ */}
        <img
          style={{ width: '150px', height: '150 px' }}
          src="./img_OanTuXi/player.png"
          alt="PlayerGame"
        />

        {/* Cho thêm một cái class = row */}
        <div className="row">{this.renderOanTuXi()}</div>
      </div>
    );
  }
}

// Lấy dữ liệu mangDatCuoc được lưu trữ trên kho về
const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc,
  };
};

// Xây dựng hàm nhận sự kiện từ nút button và gửi lên Reducer
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
