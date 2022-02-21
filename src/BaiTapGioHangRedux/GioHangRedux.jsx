import React, { Component } from "react";
// Sử dụng thư viện connect để lấy dữ liệu từ store về
// Nơi nào mà lấy dữ liệu từ store về thì mình phải bỏ 2 từ "Export default của component"
import { connect } from "react-redux";

class GioHangRedux extends Component {
  // Hàm render giỏ hàng
  renderCart = () => {
    // sau khi lấy được thuộc tính gioHang của state chứa trong redux, ta sẽ dùng vòng lặp để duyệt qua
    // Phải để từ khóa "this.props" tại vì giờ nó là props của component
    return this.props.gioHang.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.maSP}</td>
          <td>
            <img
              style={{ width: "100px" }}
              src={item.hinhAnh}
              alt={item.hinhAnh}
            />
          </td>
          <td>{item.tenSP}</td>
          <td>
            <button onClick={() => {}} className="btn btn-primary mr-2">
              -
            </button>
            {item.soLuong}
            <button onClick={() => {}} className="btn btn-primary mr-2">
              +
            </button>
          </td>
          <td>{item.giaBan.toLocaleString()}</td>
          <td>{(item.soLuong * item.giaBan).toLocaleString()}</td>
          <td>
            <button onClick={() => {}} className="btn btn-danger">
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  // Hàm tính tổng tiền
  tinhTongTien = () => {
    // Phương thức này cũng sẽ viết trong Redux của giỏ hàng
  };
  render() {
    return (
      <div>
        {/* <button
          type="button"
          className="btn btn-primary btn-lg"
          data-toggle="modal"
          data-target="#modelId"
        >
          Launch
        </button> */}
        {/* Modal */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div
            style={{ minWidth: "1000px" }}
            className="modal-dialog"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <p></p>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              {/* Để table và modal-body để render ra giao diện */}
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>Tên sản phẩm</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                      <th>Chức năng</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderCart()}</tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="5"></td>
                      <td>Tổng tiền: </td>
                      {/* Viết phương thức tính tổng tiền */}
                      <td>{this.tinhTongTien()}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export thư viện connect chứa component nó ra
// Hàm lấy state của redux biến đổi thành props của component, cái hàm này sẽ nhận giá trị từ redux đó chính là rootReducer
const mapStateToProps = (state) => {
  // state là state tổng của ứng dụng chứa các state con (Reducer)
  // Hàm này sẽ return về props mới cho ứng dụng của chúng ta
  return {
    // Tên props mới thì tự chúng ta đặt ra
    gioHang: state.stateGioHang.gioHang, // và lấy ra thuộc tính giỏ hàng của state
  };
};

export default connect(mapStateToProps)(GioHangRedux); // Bên trong dấu ngoặc thứ nhất chúng ta sẽ truyền vào một cái hàm, nó sẽ biến cái hàm đó thành props của component
