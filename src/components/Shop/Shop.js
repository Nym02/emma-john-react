import React, { useState } from "react";
import fakeData from "../../fakeData";
import { addToDatabaseCart } from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [product, setProduct] = useState(first10);
  const [cart, setCart] = useState([]);

  const handleProduct = (p) => {
    console.log("product added", p);

    const toBeAdded = p.key;
    const sameProduct = cart.find((pd) => pd.key == toBeAdded);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;

      sameProduct.quantity = count;

      const otherProducts = cart.filter((pd) => pd.key !== toBeAdded);

      newCart = [...otherProducts, sameProduct];
    } else {
      p.quantity = 1;
      newCart = [...cart, p];
    }

    setCart(newCart);
    addToDatabaseCart(p.key, count);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {product.map((p) => (
          <Product
            showAddToCart={true}
            product={p}
            handleProduct={handleProduct}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
