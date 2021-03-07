import React from "react";
import { Link } from "react-router-dom";

const ReviewItem = (props) => {
  console.log(props.product);
  const { name, quantity, img, key } = props.product;
  //   console.log(name.length);
  let strName = "";

  if (name.length > 50) {
    strName = name.slice(0, 50);
  } else {
    strName = name;
  }
  return (
    <>
      <div className="col-md-4">
        <div className="card" style={{ width: "100%" }}>
          <img className="card-img-top" src={img} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">
              Name: <Link to={"/" + key}>{strName + "..."}</Link>
            </h5>
            <p className="card-text">Quantity: {quantity}</p>
            <button
              onClick={() => props.removeProduct(key)}
              className="btn btn-primary"
            >
              Remove Item
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewItem;
