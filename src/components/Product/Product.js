import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

function Product(props) {
    // console.log(props.product.name);
    const {name, img, seller, stock, price} = props.product;
    return (
        <div className='product'>
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-details">
                <h4 className='product-header'>{
                        name
                    }</h4>
                <br/>
                <p>Price: {price}</p>
                <p><small>by:</small> {seller}</p>
                <p>Stock: {stock}</p>

                <button className="btn-product" onClick={()=> props.handleProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
                    
            </div>
        </div>
    );
}

export default Product;