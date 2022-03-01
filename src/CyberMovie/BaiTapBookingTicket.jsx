import React, { Component } from 'react'
import './BaiTapBookingTicket.css'

export default class BaiTapBookingTicket extends Component {
  render() {
    // Cho backGroundSize: 100% thì ảnh nó sẽ full cái màn hình
    return (
      <div style={{position: 'fixed', width: '100%', height: '100%', backgroundImage: 'url("./bookingTicket/bgmovie.jpg")', backgroundSize: '100%'}}>
          <div></div>
      </div>
    )
  }
}
