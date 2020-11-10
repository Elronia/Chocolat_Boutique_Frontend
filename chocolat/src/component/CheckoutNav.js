import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../styling/CheckoutNav.css';

function CheckoutNav({page}) {
    return (
        <div className="checkout-nav">
            <ul>
                <li className={page==="cart" ? "active" : ""}>
                    <Link to="/cart">Cart</Link>
                </li>
                <li className={page==="checkout" ? "active" : ""}>
                    <Link to="/checkout">Information</Link>
                </li>
                <li className={page==="shipping" ? "active" : ""}>
                    <Link to="/shipping">Shipping</Link>
                </li>
                <li className={page==="payment" ? "active" : ""}>
                    <Link to="/payment">Payment</Link>
                </li>
            </ul>
        </div>
    )
}

export default CheckoutNav;
