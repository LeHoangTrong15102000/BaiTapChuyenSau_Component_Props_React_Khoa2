import React, { Component } from "react";
import Modal from "./Modal";
import ProductList from "./ProductList";

export default class CarStore extends Component {

  // Thuộc tính product của components
  products = [
    { id: 1, name: "black car", img: "./products/black-car.jpg", price: 1000 },
    { id: 1, name: "red car", img: "./products/red-car.jpg", price: 2000 },
    { id: 1, name: "silver car", img: "./products/silver-car.jpg", price: 3000 },
    { id: 1, name: "steel car", img: "./products/steel-car.jpg", price: 4000 },
  ];


  setStateModel = (newProduct) => {
    this.setState({

    })
  }

  // Ở component ProductList thì chúng ta sẽ truyền cái props là productData
  // Video sau sẽ tìm hiểu làm sao để chúng ta xác định được cái state của modal này nằm ở component nào và sẽ xử lý khi nút "Xem chi tiết được click"
  render() {
    return (
      <div>
        <h3 className="display-4 text-center">DANH SÁCH SẢN PHẨM</h3>
        <Modal />
        <ProductList productsData={this.products}/>
      </div>
    );
  }
}
