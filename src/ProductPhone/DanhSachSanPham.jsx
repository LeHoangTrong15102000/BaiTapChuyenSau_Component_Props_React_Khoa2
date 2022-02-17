import React, { Component } from "react";

export default class DanhSachSanPham extends Component {
  // Ta có 2 component là DanhSachSanPham , SanPham,
  /**
   * DanhSachSanPham chứa 2 thuộc tính:
   *     - mangSanPham
   *     - state.sanPhamChiTiet
   *
   */

  // Xây dựng giao diện trên component DanhSachSanPham
  // Thông tin sản phẩm sẽ viết trên file component là SanPham

  // Gán dataPhone cho mangSanPham
  mangSanPham = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  // State chứa thông số sản phẩm chi mặc định, ban đầu sẽ hiện ra sản phẩm này
  state = {
    sanPhamChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
  };

  // Hàm render sản phẩm
  renderSanPham = () => {
    return this.mangSanPham.map((item, index) => {
      return (
        <div key={index} className="col-4 mt-3 text-center" style={{ width: "350px" }}>
          <div className="card text-left" >
            <img src={item.hinhAnh} alt={item.hinhAnh} />
            <div className="card-body bg-secondary">
              <h5 className="card-title">{item.tenSP}</h5>
              <p className="card-text">Hệ điều hành: {item.heDieuHanh}</p>
              <p className="card-text">Giá bán: {item.giaBan}</p>
              <button className="btn btn-success text-white">
                Xem chi tiết
                <i className="fa fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="display-4 text-center">DANH SÁCH SẢN PHẨM</h3>

        {/* row đầu tiên sẽ viết hàm render ra sản phẩm */}
        <div className="row">{this.renderSanPham()}</div>

        <div className="row">{/* Hiện chi tiết sản phẩm ở đâys */}</div>
      </div>
    );
  }
}
