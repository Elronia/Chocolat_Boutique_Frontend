import React from 'react';
import '../styling/ShippingForm.css';
import { withRouter } from 'react-router-dom';

class ShippingForm extends React.Component{
    handleCheckout(evt){
        evt.preventDefault();
        this.props.history.push("/payment")
    }

    render() {
        console.log(this.props)
        return (
            <div className="shipping-form">
                <div className="left">
                    <form>
                        <div className="combined-input">
                            <div className="input-group">
                                <label>Contact</label>
                                <input type="contact" value={this.props.user.email}/>
                            </div>
                            <div className="input-group">
                            <label>Ship to</label>
                            <input type="text" placeholder="Check your address" value={`${this.props.user.address}, ${this.props.user.city}, ${this.props.user.state}, ${this.props.user.zip}`}/>
                            </div>
                        </div>
                        <h2>Shipping method</h2>
                        <div className="combined-input shipping-info">
                        <div className="input-group">
                            <input type="radio" name="method" value="12.00" onChange={evt => this.props.updateShippingMethod(evt)}/>
                                <label>
                                    <span>UPS 2nd Day Air</span>
                                    <span className="shipping-cost">$12.00</span>
                                </label>
                        </div>
                        <div className="input-group">
                            <label>
                                <input type="radio" name="method" value="20.00" onChange={evt => this.props.updateShippingMethod(evt)}/>
                                UPS Next Day Air - $20.00
                            </label>
                        </div>
                        </div>
                        <button className="continue-button" onClick={(evt) => this.handleCheckout(evt)}>Continue to payment</button>
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
                        <div className="price">${cartItem.qty*cartItem.treat.price}.00</div>
                    </div>
                ))}
                </div>
            </div>
        )
    }
}



export default withRouter(ShippingForm);