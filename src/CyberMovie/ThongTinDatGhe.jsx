import React, { Component } from 'react';
import { connect } from 'react-redux';
class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        {/* button hiện các ghế trong Movie */}
        <div className="mt-3">
          <button className="gheDuocChon"></button>
          <span className="text-light ml-3" style={{ fontSize: '25px' }}>
            Ghế đã đặt
          </span>
          <br />
          <button className="gheDangChon mt-1"></button>
          <span className="text-light ml-3" style={{ fontSize: '25px' }}>
            Ghế đang chọn
          </span>
          <br />
          <button className="ghe mt-1" style={{ marginLeft: 0 }}></button>
          <span className="text-light ml-3" style={{ fontSize: '25px' }}>
            Ghế chưa đặt
          </span>
        </div>

        {/* Table hiển thị thông tin được chọn */}
        <div className="mt-3">
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: '20px' }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Hủy</th>
              </tr>
            </thead>
            {/* tbody chúng ta sẽ binding vào, lấy dữ liệu từ store trả về */}
            <tbody>
              <tr className="text-light">
                <td>12A</td>
                <td className="text-warning">75000</td>
                <td>X</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {};

export default connect(mapStateToProps)(ThongTinDatGhe);
