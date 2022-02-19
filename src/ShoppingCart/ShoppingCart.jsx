import React, { Component } from 'react'

export default class ShoppingCart extends Component {

    // Bài ngày hôm này sẽ nói về phần còn lại của props đó là children và nó thường được sử dụng trong những tình huống như thế nào
    // Nó không khác gì props nhưng để mà khi truyền giữa các component phức tạp(nhiều component lòng nhau) có thể truyền qua props của thẻ nhưng mà nó dài dòng
    // Có thể truyền giữa innerHTML của thẻ
  render() {
    return (
      <div>ShoppingCart</div>
    )
  }
}
