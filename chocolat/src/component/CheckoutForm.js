import React from 'react';

import '../styling/CheckoutForm.css'

class CheckoutForm extends React.Component {
    handleCheckout(){
        // console.log("Checkout")
        fetch("http://localhost:3000/checkout", {
        method: "POST",
        headers: {
        "content-type": "application/json"
        },
        body: JSON.stringify({
            // burger_id: burger_id,
            // order_id: this.state.current_cart.id
            })
        })
    .then(res => res.json())
    // .then(newlyCreatedBurgerOrder => {
    //   let copyOfBurgerOrdersForCart = [...this.state.current_cart.burger_orders, newlyCreatedBurgerOrder]
    //   let copyOfCart = {
    //     ...this.state.current_cart, 
    //     burger_orders: copyOfBurgerOrdersForCart
    //   }
    //   this.setState({
    //     current_cart: copyOfCart
    //   })
    // })
  }
    

    render() {
        return (
        <div className="checkout-form">
            <div className="left">
                <form>
                    <h2>Contact Information</h2>
                    <input type="email" placeholder="Enter your email"/>
                    <div className="full-name">
                        <input type="text" placeholder="Enter your First Name"/>
                        <input type="text" placeholder="Enter your Last Name"/>
                    </div>
                    
                </form>
            </div>
            <div className="right">
                {this.props.cartArray.map((cartItem) => (
                    <div className="summary-row">
                        <div className="imageContainer">
                            <div className="count">
                                {cartItem.qty}
                            </div>
                            <img src={cartItem.treat.image}/>
                        </div>
                        <div className="name">{cartItem.treat.name}</div>
                        <div className="price">${cartItem.qty*cartItem.treat.price}</div>
                    </div>
                ))}
            </div>
        </div>
        )
    }
}

export default CheckoutForm;