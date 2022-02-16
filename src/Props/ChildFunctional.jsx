import React from 'react'

// Thì props nó sẽ nhận vào thuộc tính ở trên đầu cái hàm này

// Đối với react Functional thì props nó sẽ nhận thông qua thuộc tính là param của dữ liệu
export default function ChildFunctional(props) {
  return (
    <div>
        <img
          style={{ width: "100px" }}
          src={props.propSource}
          alt="ImgHuTieu"
        />

        <div style={{width: '200px'}} className="card text-left">
          <img style={{width: '200px'}} className="card-img-top" src={props.propSource} alt={props.propSource} />
          <div className="card-body">
            <h4 className="card-title">{props.propName}</h4>
            <p className="card-text">Body</p>
          </div>
        </div>
    </div>
  )
}
