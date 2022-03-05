import React, { Component } from "react";
import { flushSync } from "react-dom";
import "./UserProfile.css";

export default class UserProfile extends Component {
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
                <input type="text" name="firstName" required />
                <span className="highlight" />
                <span className="bar" />
                <label>firstName</label>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="group">
                <input type="text" name="lastName" required />
                <span className="highlight" />
                <span className="bar" />
                <label>lastName</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="group">
                <input type="text" name="userName" required />
                <span className="highlight" />
                <span className="bar" />
                <label>userName</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="group">
                <input type="text" name="email" required />
                <span className="highlight" />
                <span className="bar" />
                <label>Email</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="group">
                <input type="password" name="passWord" required />
                <span className="highlight" />
                <span className="bar" />
                <label>passWord</label>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="group">
                <input type="password" name="passWordConfirm" required />
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
