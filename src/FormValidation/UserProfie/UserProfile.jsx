import React, { Component } from "react";
import { flushSync } from "react-dom";
import "./UserProfile.css";

export default class UserProfile extends Component {

  state = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    passWord: '',
    passWordConfirm: '',
  }

  // Viết hàm lấy value của thẻ input
  // handleChangeValue = (name , value) => {
  //   // thử xem -> name nào thì sẽ trả về value đó
  //   console.log(name,value)
  //   // Thì ở đây thằng nào truyền giá trị vào sẽ ứng với cái name của thằng đó
  //   this.setState({
  //     // lấy động về mặt thuộc tính
  //     [name]: value, // dùng ES6, ứng với name nào thì value tương ứng của name đó
  //   }, () => {
  //     console.log(this.state);// xem sau khi thực hiện setState thì giá trị của state là như nào
  //   })
  // }

  // Thay vì phải viết liên tực ở trong form input ta đem ra thành một cái hàm -> Viết như vậy thì nó sẽ gắn ngọn và clean code hơn nhiều
  handleChangeValue = (event) => {
    let {name , value } = event.target  
    this.setState({
      // setState nó lại bằng cách là giá trị của thằng input nào thì được nhập và ô của input đó
      [name]: value,
    }, () => {
      console.log(this.state)
    })
  }

  render() {
    // Đặt thêm thuộc tính name trong ô input để người dùng biết là đang gõ vào ô input nào
    return (
      <div
        className="container-fluid d-flex justify-content-center align-item-center"
        style={{
          backgroundColor: "#EEEEEE",

          height: '100%',
        }}
      >
        <form style={{fontFamily: "'Google Sans' , 'Noto Sans Myanmar UI', arial, sans-serif", width: 600}} className=" bg-white p-5 m-5">
          <h1 className="text-center mt-0 mb-5">User Profile</h1>

          <div className="row">
            <div className="col-sm-6">
              <div className="group">
                <input type="text" name="firstName" required onChange={this.handleChangeValue} />
                <span className="highlight" />
                <span className="bar" />
                <label>firstName</label>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="group">
                <input type="text" name="lastName" required onChange={this.handleChangeValue} />
                <span className="highlight" />
                <span className="bar" />
                <label>lastName</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="group">
                <input type="text" name="userName" required onChange={this.handleChangeValue} />
                <span className="highlight" />
                <span className="bar" />
                <label>userName</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="group">
                <input type="text" name="email" required onChange={this.handleChangeValue}/>
                <span className="highlight" />
                <span className="bar" />
                <label>Email</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="group">
                <input type="password" name="passWord" required onChange={this.handleChangeValue} />
                <span className="highlight" />
                <span className="bar" />
                <label>passWord</label>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="group">
                <input type="password" name="passWordConfirm" required onChange={this.handleChangeValue}/>
                <span className="highlight" />
                <span className="bar" />
                <label>passWordConfirm</label>
              </div>
            </div>
          </div>

           {/* Button xác nhận */}
           <div className="row">
             <div className="col-12">
               <button className="btn text-white bg-dark w-100 p-4" style={{fontSize: 25}}>Xác nhận</button>
             </div>
           </div>
        </form>
      </div>
    );
  }
}
