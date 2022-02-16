import React, { Component } from 'react'
import Child from './Child'
import ChildFunctional from './ChildFunctional'
// import Parent from './Parent'

export default class Parent extends Component {



   src = "https://images.foody.vn/res/g73/720857/prof/s640x400/foody-mobile-hfghfgh-jpg.jpg"


   name = "Hủ Tiếu Sa Đéc"
  render() {
    return (
      <div>
        {/* <input type="text"/>
        <Child  propSource={this.src} propName={this.name} />
        <Child  propSource={this.src} propName={'Hủ Tiếu Sa Đéc 1'} />
        <Child  propSource={this.src} propName={'Hủ Tiếu Sa Đéc 2'} /> */}


        <ChildFunctional propSource={this.src} propName={this.name}/>
        <ChildFunctional propSource={this.src} propName={'Hủ Tiếu Sa Đéc là nhất'}/>
        <ChildFunctional propSource={this.src} propName={'Hủ Tiếu Sa Đéc là số 1'}/>
      </div>
    )
  }
}
