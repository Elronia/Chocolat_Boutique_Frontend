import React from 'react';
import '../styling/ShippingForm.css';
import { withRouter, Link } from 'react-router-dom';
import CheckoutNav from './CheckoutNav';

class ShippingForm extends React.Component{
    //navigate to payment form
    handleCheckout(evt){
        //prevent from reloading page
        evt.preventDefault();
        this.props.history.push("/payment")
    }

    render() {
        console.log(this.props)
        return (
            <div className="shipping-form">
                <div className="left">
                    <CheckoutNav page="shipping"/>
                    <form>
                        <div className="combined-input">
                            <div className="input-group">
                                <label>Contact</label>
                                <input type="contact" disabled={true} value={this.props.user.email}/>
                            </div>
                            <div className="input-group">
                                <label>Ship to</label>
                                <input type="text" placeholder="Check your address" disabled={true} value={`${this.props.user.address}, ${this.props.user.city}, ${this.props.user.state}, ${this.props.user.zip}`}/>
                            </div>
                        </div>
                        <h2>Shipping method</h2>
                        <div className="combined-input shipping-info">
                        <div className="input-group">
                            <input type="radio" name="method" value="12.00" checked={this.props.shippingCost===12} onChange={evt => this.props.updateShippingCost(evt)}/>
                                <label>
                                    <span>UPS 2nd Day Air</span>
                                    <span className="shipping-cost">$12.00</span>
                                </label>
                        </div>
                        <div className="input-group">
                        <input type="radio" name="method" value="20.00" checked={this.props.shippingCost===20} onChange={evt => this.props.updateShippingCost(evt)}/>
                            <label>
                                <span>UPS Next Day Air</span> 
                                <span className="shipping-cost">$20.00</span>
                            </label>
                        </div>
                        </div>
                        <div className="submit-group">
                            <Link to="/checkout"> &lt; Return to information</Link>
                            <button className="continue-button" disabled={!this.props.shippingCost} onClick={(evt) => this.handleCheckout(evt)}>Continue to payment</button>
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
                        <div className="subtotal-price">${cartItem.qty*cartItem.treat.price}.00</div>
                    </div>
                ))}
                </div>
            </div>
        )
    }
}



export default withRouter(ShippingForm);