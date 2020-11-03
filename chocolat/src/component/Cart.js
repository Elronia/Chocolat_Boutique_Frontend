import React from 'react';
import CartPage from './CartPage';
import '../styling/Cart.css'


class Cart extends React.Component {
    // componentDidUpdate(prevProps, prevState){
    //     // if(prevState.cartArray !== this.props.cartArray){
    //     //   let total = this.props.cartArray.reduce((sum, product)=>
    //     //     sum + product.treat.price, 0 );
    
    //     // this.setState({
    //     //   cartTotal: total
    //     // })
    //     console.log("prevState", prevState)
    //     // console.log("State",this.state)
    //     // } 
    // }

    // this.props.cartArray.map((treat, index) => {
    // })
    //key={`${treat.id}-${index}`}

    turnToItemSection = () => {
        return this.props.cartArray.map((treat) => (
          <CartPage key={treat.id} treat={treat} 
            cartArray={this.props.cartArray} 
            cartActions={this.props.cartActions}
            removeItem={this.props.removeItem}/>
        ));
    }
   
    render() {
        return (
        <>
            <h1 className="cart-head">SHOPPING CART</h1>
                { this.props.cartArray.length >= 1 ?  this.turnToItemSection() : <p>Your cart is currently empty. Continue browsing here.</p>}
          
            <div className="cart-total-cont">
                <div class="total-box">
                    <h4>Total: ${this.props.cartTotal}.00</h4>
                    <hr/>
                    <h4>Subtotal: ${this.props.cartTotal}.00</h4>
                </div>
            </div>
            {/* <CheckoutModal
            cartArray={this.props.cartArray}  /> */}
        </>
        )
    }
}

export default Cart;