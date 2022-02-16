import React from 'react'

// Thì props nó sẽ nhận vào thuộc tính ở trên đầu cái hàm này

// Đối với react Functional thì props nó sẽ nhận thông qua thuộc tính là param của dữ liệu
export default function ChildFunctional(props) {
  return (
    <div>
        {/* <img
          style={{ width: "100px" }}
          src={props.propObject.img}
          alt="ImgHuTieu"
        /> */}

        <div style={{width: '200px'}} className="card text-left">
          <img style={{width: '200px'}} className="card-img-top" src={props.propObject.img} alt={props.propObject.img} />
          <div className="card-body">
            <h4 className="card-title">{props.propObject.name}</h4>
            <p className="card-text">{props.propObject.desc}</p>
          </div>
        </div>
    </div>
  )
}
