import React, { Component } from "react";

export default class ProductItemRedux extends Component {
  render() {
    let { sanPhamProps } = this.props;
    return (
      <div className="card text-left">
        <img
          style={{ height: "350px" }}
          className="card-img-top"
          src={sanPhamProps.hinhAnh}
          alt={sanPhamProps.hinhAnh}
        />
        <div className="card-body bg-info">
          <h5 className="card-title">{sanPhamProps.tenSP}</h5>
          <p className="card-text">Hệ điều hành: {sanPhamProps.heDieuHanh}</p>
          <p className="card-text">
            Giá bán: {sanPhamProps.giaBan.toLocaleString()}
          </p>

          <button onClick={() => {}} className="btn btn-success text-white">
            Xem chi tiết
            <i className="fa fa-info-circle ml-2"></i>
          </button>

          <button onClick={() => {}} className="btn btn-secondary ml-2">
            Thêm giỏ hàng
            <i class="fa fa-shopping-cart ml-2"></i>
          </button>
        </div>
      </div>
    );
  }
}
