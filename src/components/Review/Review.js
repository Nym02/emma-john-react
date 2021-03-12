import React, { useState, useEffect } from "react";
import fakeData from "../../fakeData";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Review = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKeys = Object.keys(saveCart);

    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = saveCart[key];
      return product;
    });
    // console.log(cartProducts);
    setCart(cartProducts);
  }, []);

  const removeProduct = (p) => {
    console.log("removed product", p);
    const newCart = cart.filter((pid) => pid.key !== p);
    setCart(newCart);
    removeFromDatabaseCart(p);
  };
  return (
    <div>
      <h1>Cart:{cart.length}</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              {cart.map((pd) => (
                <ReviewItem
                  key={pd.key}
                  removeProduct={removeProduct}
                  product={pd}
                ></ReviewItem>
              ))}
            </div>
          </div>
          <div className="col-md-4">
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
