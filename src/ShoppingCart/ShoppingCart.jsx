import React, { Component } from "react";
import CartModal from "./CartModal";
import ProductList from "./ProductList";

export default class ShoppingCart extends Component {
  // Bài ngày hôm này sẽ nói về phần còn lại của props đó là children và nó thường được sử dụng trong những tình huống như thế nào
  // Nó không khác gì props nhưng để mà khi truyền giữa các component phức tạp(nhiều component lòng nhau) có thể truyền qua props của thẻ nhưng mà nó dài dòng
  // Có thể truyền giữa innerHTML của thẻ

  // Thì những cái gì tính toán được thì chúng ta sẽ không lưu vào cơ sở dữ liệu
  // Khi mà làm button giỏ hàng thì nó sẽ có thêm nguồn dữ liệu là state giỏ hàng

  state = {};

  render() {
    // Bước 1: Dàn layout -> Done
    // Bước 2: Load những dữ liệu tĩnh - Done
    // Bước 3: Xác định dữ liệu thay đổi => state của component - video sau sẽ xác định dữ liệu thay đổi
    return (
      <div className="container-fluid">
        <h3 className="display-4 text-center">BÀI TẬP GIỎ HÀNG</h3>
        <div style={{ fontSize: "20px" }} className="text-right mr-5">
          <span style={{ cursor: "pointer" , width: "17px"}} data-toggle="modal" data-target="#modelId">
            Giỏ hàng:{" "}
            <i class="fa fa-shopping-cart">
              (0)
            </i>
          </span>
        </div>
        <CartModal content={this.state.productDetail} />
        <ProductList />
      </div>
    );
  }
}
