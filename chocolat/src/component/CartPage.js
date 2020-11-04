import React from 'react';
import CartItem from './CartItem';
import '../styling/CartPage.css'
import { useHistory } from "react-router-dom";


function Cart(props) {
    const history = useHistory();
    const handleCheckout = () => {
        console.log("Checkout")
        // fetch('http://localhost:3000/checkout')
        history.push("/checkout");
    }
        return (
        <>
            <h1 className="cart-head">SHOPPING CART</h1>
            {props.cartArray.length >= 1 
                ? props.cartArray.map((treat, index) => (
                    <CartItem 
                        key={treat.id} 
                        treat={treat} 
                        cartArray={props.cartArray} 
                        cartActions={props.cartActions}
                        removeItem={props.removeItem}
                        increaseItem={() => props.increaseItem(index)}
                        decreaseItem={() => props.decreaseItem(index)}/>
                )) 
                : <div className="cart">
                    <p>Your cart is currently empty.</p>
                    <p>Continue browsing here.</p>
                </div> 
            }
          
            <div className="cart-total-cont">
                <div class="total-box">
                    {/* <h4>Total: ${props.cartTotal}.00</h4>
                    <hr/>
                    <h4>Subtotal: ${props.cartTotal}.00</h4> */}
                </div>
            </div>

            { props.cartArray.length >= 1 ?  <div className="checkout-btn-wrapper">
                <button className="checkout-btn" onClick={() => handleCheckout()}>Check Out</button>
                <div className="clearfix"></div>
            </div> : null }
        </>
        )
}

export default Cart;