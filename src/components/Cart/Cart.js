import React from 'react';

const Cart = (props) => {
    const c = props.cart;
    return (
        <div>
            <h1>Cart: </h1>
            <p>Items Ordered: {c.length} </p>
        </div>
    );
};

export default Cart;