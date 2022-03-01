import React, { Component } from 'react'

export default class HangGhe extends Component {


  // Render ra ghế ở chỗ màn hình
  // true thì trả về ghế đã được chọn còn false thì là ghế bình thường đang chọn hoặc là trống
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = '';
      // tạo một biến disabled là false
      let disabled = false;

      if (ghe.daDat) {
        cssGheDaDat = 'gheDuocChon'
        disabled = true;
      }
      
      // Và sau đó return lại nút button
      // Nếu mà có ghế mà người ta đặt rồi thì mình phải disabled nó đi
      // Mặc định nó sẽ là ghe khi nào daDat = true thì nó sẽ chọn class là cssGheDaDat
      // Để test xem nó có click được hông sử dụng onClick vào để test
      return <button disabled={disabled} className={`ghe ${cssGheDaDat}`} key={index}>
        {ghe.soGhe}
      </button>
    })

  }

  // Viết hàm render số hàng
  renderSoHang = () => {
    // không return về button thay vào đó sẽ return về thẻ span
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      // Trong đây thì mới return lại thẻ span
      return <button key={index} className="rowNumber">{hang.soGhe}</button>
    })
  }


  renderHangGhe = () => {
    // Nếu là hàng đầu tiền trong các object hàng ghế thì 
    if (this.props.soHangGhe === 0) {
      return <div className="ml-4">
        {this.props.hangGhe.hang} {this.renderSoHang()}
      </div>
    } else {
      // Ngược lại thì mình sẽ in ra thẻ button ở các hàng từ 1 trở đi
      return  <div>
      {this.props.hangGhe.hang} {this.renderGhe()}
    </div>
    }
    
  }

  render() {
    return (
      <div className="text-light text-left ml-5 mt-3" style={{fontSize: 30}}>
        {this.renderHangGhe()}
      </div>
    )
  }
}
