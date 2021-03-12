import React from "react";
import { Link } from "react-router-dom";
import "../Product/Product.css";

const Cart = (props) => {
  const cart = props.cart;
  console.log(cart);

  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    // const p = c[i];

    total = total + cart[i].price * cart[i].quantity;
  }
  // console.log(total);

  let shipping = 0;

  if (total > 200) {
    shipping = 10;
  } else if (total > 100) {
    shipping = 30;
  } else if (total > 0) {
    shipping = 50;
  }

  return (
    <div>
      <h1>Cart: </h1>
      <p>Items Ordered: {cart.length} </p>
      <p>Subtotal: {total}</p>
      <p>Shipping Cost: {shipping}</p>
      <p>Total Price: {total + shipping}</p>

      {/* <Link to="/review">
        <button className="btn-product">Review Order</button>
      </Link> */}

      <a href="/review" className="btn-product">
        Review Order
      </a>
    </div>
  );
};

export default Cart;
