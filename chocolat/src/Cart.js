// import React from 'react';
// import CartPage from './CartPage';


// class Cart extends React.Component {
//     turnToItemSection = () => {
//         return this.props.cartArray.map((treat) => (
//             <CartPage key={treat.id} treat={treat} 
//                 cartArray={this.props.cartArray} 
//                 cartActions={this.props.cartActions}
//                 removeItem={this.props.removeItem}/>
//             ))
//         }
     
//     render() {
        
//         return (
//             <h1>CART</h1>
//             { this.props.cartArray.length >= 1 ?  this.turnToItemSection() : <h1>No Items in your Cart!</h1>}
//             <div>
//                 <div>
//                     <div>
//                         <h1>Subtotal: ${this.props.cartTotal}.00</h1>
//                         <h1>Shipping: FREE</h1>
//                         <hr/>
//                         <h1>Total: ${this.props.cartTotal}.00</h1>
//                     </div>
//                 </div>
//             <div class="button" className="modal-but">
//                 <CheckoutModal cartArray={this.props.cartArray}/> 
//             </div>
//         )

//     }
// }

// export default Cart;