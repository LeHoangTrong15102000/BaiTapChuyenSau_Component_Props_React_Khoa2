import React, { Component } from "react";
import GioHangRedux from "./GioHangRedux";
import ProductListRedux from "./ProductListRedux";

export default class BaiTapGioHangRedux extends Component {
    
    // Bây giờ chúng ta viết các hàm làm render lại giao diện trong phần Redux của Project

    // Tính tổng số lượng của giỏ hàng ngay tại cart shopping
    tinhTongSoLuong = (maSP, number) => {

    }
    
  render() {
    return (
      <div className="container-fluid">
        <h3 className="display-4 text-center">BÀI TẬP GIỎ HÀNG</h3>
        <div style={{ fontSize: "20px" }} className="text-right mr-5">
          <span
            style={{ cursor: "pointer", width: "17px" }}
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng:{" "}
            <i class="fa fa-shopping-cart">({this.tinhTongSoLuong()})</i>
          </span>
        </div>
        <GioHangRedux />
        <ProductListRedux />
      </div>
    );
  }
}
