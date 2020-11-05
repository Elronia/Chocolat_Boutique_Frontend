import React from 'react';
import { withRouter } from 'react-router-dom';
import '../styling/CheckoutForm.css'


class CheckoutForm extends React.Component {
    state = {
            username: "kat",
            first_name: "Ekaterina",
            last_name: "Zarudnaya",
            address: "1577 E 17th Street",
            city: "Brooklyn",
            state: "NY",
            zip: 11230,
            phone: "212-777-7777",
            email: "katherine@gmail.com"
        }
    

    handleCheckout(evt){
        evt.preventDefault();
        // console.log("Checkout")
        fetch("http://localhost:3000/user/1", {
        method: "PATCH",
        headers: {
        "content-type": "application/json"
        },
        body: JSON.stringify(this.state)
        })
    .then(resp => resp.json())
    .then(newlyCreatedOrder => {
        this.props.history.push("/checkout/shipping")
    })
  }

    
//name="state" value={state}
    render() {
        return (
        <div className="checkout-form">
            <div className="left">
                <form>
                    <h2>Contact Information</h2>
                    <div className="input-group">
                        <input type="email" placeholder="Email"/>
                    </div>
                    <h2>Shipping address</h2>
                    <div className="input-group">
                        <input type="text" placeholder="First Name" value={this.state.first_name} onChange={evt => this.setState({first_name: evt.target.value})}/>
                        <input type="text" placeholder="Last Name"/>
                    </div>
                    <div className="input-group">
                        <input type="text" placeholder="Address"/>
                    </div>
                    <div className="input-group">
                        <input type="text" placeholder="City"/>
                    </div>
                    <div className="input-group">
                        <select className="ui fluid dropdown" >
                            <option value="">State</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                        <input type="text" placeholder="ZIP code"/>
                    </div>
                    <div className="input-group">
                        <input type="text" placeholder="Phone"/>
                    </div>
                    <button className="continue-button" onClick={(evt) => this.handleCheckout(evt)}>Continue to Shipping</button>
                    
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

export default withRouter(CheckoutForm);