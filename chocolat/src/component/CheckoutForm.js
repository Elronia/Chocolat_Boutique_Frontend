import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../styling/CheckoutForm.css';
import CheckoutNav from './CheckoutNav';


class CheckoutForm extends React.Component {
    state = {}

    // componentDidMount() {
    //     console.log(this.props.user)
    //     this.setState(this.props.user)
    // }
    
    get isLoggedIn() {
        return !!(localStorage.token && this.props.user.id)
    }

// Upon submission of the form, create a newUser object, which has all info from this.state (except passwordConfirm, which would be redundant)
    handleCheckout(evt){
        evt.preventDefault();
        // console.log("Checkout")
        fetch('http://localhost:3000/' + (this.isLoggedIn ? `user/${this.props.user.id}` : 'users'), {
            method: this.isLoggedIn ? "PATCH" : "POST",
            headers: {
            "content-type": "application/json"
            },
            body: JSON.stringify(this.props.user)
        })
        .then(resp => resp.json())
        .then((resp) => {
            // console.log(resp)
            //update user data in global state
            this.props.updateUser(resp.user);
            //save user token to local storage in order to remember the current user
            localStorage.token = resp.token;
            //navigate to shipping form page
            this.props.history.push("/shipping");
        })
    }

    //checks if checkout form is valid
  get isFormValid(){
    return (
        this.props.user.email && 
        this.props.user.first_name &&
        this.props.user.last_name &&
        this.props.user.address &&
        this.props.user.city &&
        this.props.user.state &&
        this.props.user.zip &&
        this.props.user.phone &&
        (this.isLoggedIn 
            ? true 
            //validate creating account specific fields
            : this.state.username && 
            this.state.password && 
            this.state.confirmPassword && 
            this.state.password === this.state.confirmPassword)
    )
  }

    render() {
        return (
        <div className="checkout-form">
            <div className="left">
            <CheckoutNav page="checkout"/>
                <form>
                    <div className="checkout-signin">
                        <h2>Contact Information</h2>
                        {this.isLoggedIn ? null : <div className="login-message">Already have an account? 
                        <Link to="/account">Log in</Link>
                        </div>}
                    </div>
                    
                    <div className="input-group">
                        <input type="email" placeholder="Email" required  value={this.props.user.email} onChange={evt => this.props.updateUser({email: evt.target.value})}/>
                    </div>
                    <h2>Shipping address</h2>
                    <div className="input-group">
                        <input type="text" placeholder="First Name" required value={this.props.user.first_name} onChange={evt => this.props.updateUser({first_name: evt.target.value})}/>
                        <input type="text" placeholder="Last Name" required value={this.props.user.last_name} onChange={evt => this.props.updateUser({last_name: evt.target.value})}/>
                    </div>
                    <div className="input-group">
                        <input type="text" placeholder="Address" required value={this.props.user.address} onChange={evt => this.props.updateUser({address: evt.target.value})}/>
                    </div>
                    <div className="input-group">
                        <input type="text" placeholder="City" required value={this.props.user.city} onChange={evt => this.props.updateUser({city: evt.target.value})}/>
                    </div>
                    <div className="input-group">
                        <select className="ui fluid dropdown" placeholder="State" required value={this.props.user.state} onChange={evt => this.props.updateUser({state: evt.target.value})}>
                            <option value="" disabled selected hidden>State</option>
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
                        <input type="text" placeholder="ZIP code" required value={this.props.user.zip} onChange={evt => this.props.updateUser({zip: evt.target.value})}/>
                    </div>
                    <div className="input-group">
                        <input type="text" placeholder="Phone" required value={this.props.user.phone} onChange={evt => this.props.updateUser({phone: evt.target.value})}/>
                    </div>
                    {!this.isLoggedIn 
                    ? <><h2>Account information</h2>
                    <div className="input-group">
                        <input type="text" placeholder="Username" required value={this.state.username} onChange={evt => this.setState({username: evt.target.value})}/>
                        <input type="password" placeholder="Password" required value={this.state.password} onChange={evt => this.setState({password: evt.target.value})}/>
                        <input type="password" placeholder="Confirm password" required value={this.state.confirmPassword} onChange={evt => this.setState({confirmPassword: evt.target.value})}/>
                    </div></>
                    : null}
                    <div className="submit-group">
                        <Link to="/cart"> &lt; Return to cart</Link>
                        <button className="continue-button" disabled={!this.isFormValid} onClick={(evt) => this.handleCheckout(evt)}>Continue to Shipping</button>
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

export default withRouter(CheckoutForm);