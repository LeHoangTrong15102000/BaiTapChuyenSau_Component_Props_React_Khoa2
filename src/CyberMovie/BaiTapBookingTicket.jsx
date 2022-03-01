import React, { Component } from 'react';
import './BaiTapBookingTicket.css';
import ThongTinDatGhe from './ThongTinDatGhe';
import { connect } from 'react-redux';

export default class BaiTapBookingTicket extends Component {
  render() {
    // Cho backGroundSize: 100% thì ảnh nó sẽ full cái màn hình
    // Mặc định row sẽ sin ra cái roll ngang cho chúng ta, row mà không đẻ trong container thì nó sẽ sinh ra cái roll ngang.

    return (
      <div
        className="bookingMovie"
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          backgroundImage: 'url("./bookingTicket/bgmovie.jpg")',
          backgroundSize: '100%',
        }}
      >
        <div
          style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.7)',
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-warning display-4">
                  ĐẶT VÉ XEM PHIM CYBERLEARN.VN
                </div>
                {/* Màn hình -> Muốn nó nhảy vào giữa thì cho nó cái div bọc bên ngoài thì nó sẽ full cây col-8 */}
                <div className="mt-1 d-flex flex-column justify-content-center align-items-center">
                  <div className="text-light" style={{ fontSize: '20px' }}>
                    Màn hình
                  </div>
                  <div className="screen"></div>
                </div>
              </div>

              <div className="col-4">
                <div
                  className="mt-4 text-info text-center"
                  style={{ fontSize: '40px', lineHeight: 1.2 }}
                >
                  DANH SÁCH GHẾ BẠN CHỌN
                </div>
                {/* Component thông tin về đặt ghế */}
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
