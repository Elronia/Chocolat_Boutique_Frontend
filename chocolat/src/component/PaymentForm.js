import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../styling/PaymentForm.css';
import StripeCheckout from 'react-stripe-checkout';
import CheckoutNav from './CheckoutNav';


class PaymentForm extends React.Component {
    handleCheckout(evt=null){
        if (evt) {
            evt.preventDefault();
        }
        
        // console.log(this.props)
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
                                <input type="ups" placeholder="Method" disabled value={this.props.shippingMethod===12 ? 'UPS 2nd Day Air - $12.00' : 'UPS Next Day Air - $20.00' }/>
                            </div>
                        </div>
                        <h2>Payment</h2>
                        <h4>All transactions are secure and encrypted.</h4>
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
                        <b>Select the address that matches your card or payment method.</b>
                        <div className="combined-input shipping-info">
                        <div className="input-group">
                        
                            <input type="radio" name="method" value="shipping address" onChange={evt => this.props.updateShippingMethod(evt)}/>
                            <label>Same as shipping address</label>
                            </div>
                        
                        <label>
                            <input type="radio" name="method" value="billing address" onChange={evt => this.props.updateShippingMethod(evt)}/>
                            Use a different billing address
                        </label> 
                        </div>
                        
                        {/* <button className="continue-button" onClick={(evt) => this.handleCheckout(evt)}>Pay now</button> */}
                    </form>
                    <Link to="/shipping"> &lt; Return to shipping</Link>
                    <StripeCheckout token={(token) => this.onToken(token)} 
                    stripeKey={process.env.REACT_APP_STRIPE_API_KEY}
                        shippingAddress
                        billingAddress
                        amount={this.props.cartArray.reduce((acc, item) => acc + item.treat.price, this.props.shippingMethod)*100}
                        name={'Boutique de Chocolat'}
                        email={this.props.user.email}>
                            <div className="submit-group">
                                <button className="payment-button">Pay now</button> 
                            </div>
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