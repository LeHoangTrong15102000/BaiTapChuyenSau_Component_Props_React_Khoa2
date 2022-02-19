import React, { Component } from 'react'
import DanhSachSanPham from '../ProductPhone/DanhSachSanPham'
import Parent from './Parent'

export default class Props extends Component {

    // Bài học thứ 1

    // Props - truyền dữ liệu giữa các component 
    // Props là một thuộc tính của thẻ (ta có thể hiểu props là property của thẻ). Ví dụ thẻ input bên dưới ta có các props ClassName, type, placeHolder

    // Props đối với components
    // props là thuộc tính mặc định của component để nhận dữ liệu từ các giá trị component cha truyền vào => để binding dữ liệu ra component con tại HTML tương ứng
    // Props của component chỉ nhận các thuộc tính được truyền vào từ component cha của nó và không thể bị chỉnh sửa bên trong component
    // Đối với stateful và stateless component có các cách sử dụng props khác nhau.


    
  render() {
    return (
      <div>
        {/* Truyền component dưới dạng props */}
        
        {/* <Parent component={DanhSachSanPham}/> */}


        Chúng ta sẽ thực hiện nâng cao hơn một chút là truyền component thông qua cách là gọi hàm đó
        <Parent component={() => {return <DanhSachSanPham />}}/>
      </div>
    )
  }
}
