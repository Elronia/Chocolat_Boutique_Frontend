import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../styling/PaymentForm.css';
import StripeCheckout from 'react-stripe-checkout';
import CheckoutNav from './CheckoutNav';


class PaymentForm extends React.Component {
    //send order data to the backend
    handleCheckout(){
        // console.log(this.props)
        fetch("http://localhost:3000/checkout", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                order: {
                    //count total using reduce: shipping cost plus prices of all treats in the cart, acc - accumulator
                    total: this.props.cartArray.reduce((acc, item) => acc + item.treat.price*item.qty, this.props.shippingCost),
                    //transforming cartArray into array of objects {id, qty}
                    treats: this.props.cartArray.map(({treat, qty}) => ({id: treat.id, qty})),
                },
                //gets user id from global state through props
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

    //handles stripe charge success event
    onToken(token){
        fetch("http://localhost:3000/payment", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                charge: {
                    //send token and total to the backend, then backend performs stripe charges
                    token: token.id
                },
                //total price charged by stripe
                total: this.props.cartArray.reduce((acc, item) => acc + item.treat.price, this.props.shippingCost),
            })
        })
    .then(resp => resp.json())
    .then((data) => {
        //send order data to the backend
        this.handleCheckout()
    })
    }

    render() {
        // console.log(window.Stripe)
        return(
            <div className="shipping-form">
                <div className="left">
                <CheckoutNav page="payment"/>
                    <form>
                        <div className="combined-input">
                            <div className="input-group">
                                <label>Contact</label>
                                <input type="contact" placeholder="Contact" disabled value={this.props.user.email}/>
                            </div>
                            <div className="input-group">
                                <label>Ship to</label>
                                <input type="text" placeholder="Ship to" disabled value={`${this.props.user.address}, ${this.props.user.city}, ${this.props.user.state}, ${this.props.user.zip}`}/>
                            </div>
                            <div className="input-group">
                                <label>Method</label>
                                <input type="ups" placeholder="Method" disabled value={this.props.shippingCost===12 ? 'UPS 2nd Day Air - $12.00' : 'UPS Next Day Air - $20.00' }/>
                            </div>
                        </div>
                        {/* <h2>Payment</h2>
                        <h4>All transactions are secure and encrypted.</h4> */}
                        {/* <b>Credit card</b>
                        <div className="input-group">
                            <input type="contact" placeholder="Card number"/>
                        </div>
                        <div className="input-group">
                            <input type="text" placeholder="Name on card" />
                        </div>
                        <div className="input-group">
                            <input type="ups" placeholder="Expiration date (MM / YY)"/>
                            <input type="ups" placeholder="Security code"/>
                        </div>*/}
                        <h2>Billing address</h2>
                        <h4>Select the address that matches your card or payment method.</h4>
                        <div className="combined-input shipping-info">
                            <div className="input-group">
                                <input type="radio" name="method" value="shipping address"/>
                                <label>Same as shipping address</label>
                            </div>
                            <div className="input-group">
                                <input type="radio" name="method" value="billing address"/>
                                <label>Use a different billing address</label> 
                            </div>
                        </div>
                        
                    </form>
                    <div className="submit-group">
                    <Link to="/shipping"> &lt; Return to shipping</Link>
                    {/* shows stripe component */}
                    <StripeCheckout 
                        token={(token) => this.onToken(token)} 
                        stripeKey={process.env.REACT_APP_STRIPE_API_KEY}
                        shippingAddress
                        billingAddress
                        amount={this.props.cartArray.reduce(
                            (acc, item) => acc + item.treat.price, 
                            this.props.shippingCost
                        )*100}
                        name={'Boutique de Chocolat'}
                        email={this.props.user.email}
                    >
                        <button className="payment-button">Pay now</button> 
                    </StripeCheckout>
                    </div>
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
                            <div className="subtotal-price">${cartItem.qty*cartItem.treat.price}.00</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default withRouter(PaymentForm);