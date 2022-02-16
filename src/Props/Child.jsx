import React, { Component } from "react";

export default class Child extends Component {
  // Child là cái thẻ mà do chúng ta tự định nghĩa
  // Ví dụ chngs ta có nguồn dữ liệu từ parent và chúng ta muốn binding sang thẻ cha

  // Muốn lấy dữ liệu từ thằng cha qua thì chúng ta chỉ cần gọi nó thông qua thuộc tính props của thằng cha
  // Nhận props từ component cha thì cú pháp như sau this.props.{prop Name}


  // Sau này chúng ta sẽ chạy vòng lặp và quét các cái mảng để tạo ra n component tương ứng => lúc đó nó sẽ tạo động hay hơn
  // Phải đặt đúng tên của props thì nó mới nhận được giá trị từ thằng cha của nó
  // Thuộc tính props nhận vào thông qua this.props
  render() {


    
    return (
      <div>
        {/* <img
          style={{ width: "100px" }}
          src={this.props.propSource}
          alt="ImgHuTieu"
        /> */}

        <div style={{width: '200px'}} className="card text-left">
          <img style={{width: '200px'}} className="card-img-top" src={this.props.propObject.img} alt={this.props.propSource} />
          <div className="card-body">
            <h4 className="card-title">{this.props.propObject.name}</h4>
            <p className="card-text">{this.props.propObject.price}</p>
          </div>
        </div>
      </div>
    );
  }
}
