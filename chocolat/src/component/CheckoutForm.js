import React from 'react';

// import '../styling/CheckoutForm.css'


class CheckoutForm extends React.Component {
    handleCheckout(){
        console.log("Checkout")
        // fetch('http://localhost:3000/checkout')
    }


    render() {
        return (
        <>
            <h1>CHECK OUT</h1>
        </>
        )
    }
}

export default CheckoutForm;