import React from 'react';
import { withRouter } from 'react-router-dom';
import '../styling/PaymentForm.css';
import StripeCheckout from 'react-stripe-checkout';


class PaymentForm extends React.Component {
    handleCheckout(evt=null){
        if (evt) {
            evt.preventDefault();
        }
        
        console.log(this.props)
        fetch("http://localhost:3000/checkout", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                order: {
                    total: this.props.cartArray.reduce((acc, item) => acc + item.treat.price, this.props.shippingMethod),
                    treats: this.props.cartArray.map(({treat, qty}) => ({id: treat.id, qty})),
                },
                userId: this.props.user.id
            })
        })
    .then(resp => resp.json())
    .then(() => {
        alert("Thank you for your purchase! Your order will be shipped soon.")
        // this.props.updateUser(this.state);
        // this.props.history.push("/shipping")
    })
    }

    onToken(token){
        fetch("http://localhost:3000/payment", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                charge: {
                    token: token.id
                },
                total: this.props.cartArray.reduce((acc, item) => acc + item.treat.price, this.props.shippingMethod),
            })
        })
    .then(resp => resp.json())
    .then((data) => {
        this.handleCheckout()
        // this.props.updateUser(this.state);
        // this.props.history.push("/shipping")
    })
    }

    render() {
        // console.log(window.Stripe)
        return(
            <div className="shipping-form">
                <div className="left">
                    <form>
                        <div className="input-group">
                            <input type="contact" placeholder="Contact"/>
                        </div>
                        <div className="input-group">
                            <input type="text" placeholder="Ship to" />
                        </div>
                        <div className="input-group">
                            <input type="ups" placeholder="Method"/>
                        </div>
                        <h2>Payment</h2>
                        <b>All transactions are secure and encrypted.</b>
                        <div className="input-group">
                            <input type="contact" placeholder="Card number"/>
                        </div>
                        <div className="input-group">
                            <input type="text" placeholder="Name on card" />
                        </div>
                        <div className="input-group">
                            <input type="ups" placeholder="Expiration date (MM / YY)"/>
                            <input type="ups" placeholder="Security code"/>
                        </div>
                        <h2>Billing address</h2>
                        <b>Select the address that matches your card or payment method.</b>
                        <div className="input-group">
                            <input type="contact" placeholder="Same as shipping address"/>
                        </div>
                        <div className="input-group">
                            <input type="text" placeholder="Use a different billing address" />
                        </div>
                        {/* <button className="continue-button" onClick={(evt) => this.handleCheckout(evt)}>Pay now</button> */}
                    </form>
                    <StripeCheckout token={(token) => this.onToken(token)} 
                    // stripeKey={process.env.STRIPE_API_KEY}
                        // stripeKey={publishableKey}
                        shippingAddress
                        billingAddress>
                            <button className="payment-button">Pay now</button> 
                    </StripeCheckout>
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
                            <div className="price">${cartItem.qty*cartItem.treat.price}.00</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default withRouter(PaymentForm);