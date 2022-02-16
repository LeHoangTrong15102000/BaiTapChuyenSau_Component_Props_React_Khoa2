import React, { Component } from 'react'
import Child from './Child'
import ChildFunctional from './ChildFunctional'
// import Parent from './Parent'

export default class Parent extends Component {



   src = "https://images.foody.vn/res/g73/720857/prof/s640x400/foody-mobile-hfghfgh-jpg.jpg"


   name = "Hủ Tiếu Sa Đéc"
  render() {

    // có thể truyền vào là một cái object gom lại các thuộc tính như source ảnh, giá , tên sản phẩm , mô tả
    let propChild = {
      id: 1,
      name: "Hủ Tiếu Sa Đéc",
      price: '20$',
      desc: "Hủ Tiếu Sa Đéc là số một",
      img: 'https://images.foody.vn/res/g73/720857/prof/s640x400/foody-mobile-hfghfgh-jpg.jpg'
    }

    
    return (
      <div>
        {/* <input type="text"/>
        <Child  propSource={this.src} propName={this.name} />
        <Child  propSource={this.src} propName={'Hủ Tiếu Sa Đéc 1'} />
        <Child  propSource={this.src} propName={'Hủ Tiếu Sa Đéc 2'} /> */}


        {/* <ChildFunctional propSource={this.src} propName={this.name}/> */}

        <div className="container">
          <h3>Product Detail</h3>
          <Child propObject={propChild}/>
        </div>


        <div className="container">
          <h3>Product Sa Đéc</h3>
          <ChildFunctional propObject={propChild} />
        </div>
        
      </div>
    )
  }
}
