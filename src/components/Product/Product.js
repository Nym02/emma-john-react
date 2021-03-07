import React from "react";
import { Link } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Product.css";

function Product(props) {
  // console.log(props.product);
  const { name, img, seller, stock, price, key } = props.product;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-details">
        <Link to={"/" + key}>
          <h4 className="product-details">{name}</h4>
        </Link>
        <br />
        <p>Price: {price}</p>
        <p>
          <small>by:</small> {seller}
        </p>
        <p>Stock: {stock}</p>

        {props.showAddToCart && (
          <button
            className="btn-product"
            onClick={() => props.handleProduct(props.product)}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
