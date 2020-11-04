import React from 'react';
import { Grid, Image, Header, Button } from "semantic-ui-react";
import '../styling/CartItem.css'


class CartPage extends React.Component {

    state = {
      quantity: 1,
      show: true
    //   max: 5,
    //   min: 0,
    //   cartArray: []
    }
  
    increaseItem = () => {
        this.setState(prevState => {
            // if (prevState.quantity < 10) {
                console.log("prev state", prevState)
                return {
                    quantity: prevState.quantity + 1,
                    
                }
            // } else {
            //     return null
            // }
        })  
        //  this.setState(prevState => {
        //     console.log("prev state", prevState)
        //     this.setState({
        //         quantity: prevState.quantity + 1,
        //     }),
        //     console.log("new state", this.state.quantity)
        // })
    }

    decreaseItem = () => {
    this.setState(prevState => {
        if (prevState.quantity > 0) {
            return {
            quantity: prevState.quantity - 1
            }
            } else {
            return null;
            }
        })
    }

    toggleClick = () => {
        this.setState({ show: !this.state.show });
    }

    handleChange = (evt) => {
        this.setState({
            quantity: evt.target.value
        })
    }

    render(){
        console.log(this.props.treat)
        let { name, price, image } = this.props.treat.treat
        
        return(
        <div> 
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
                <h1 className="item">Item</h1>
                <Image src={image} />
                <h4 className="cart-name">{name}</h4>
            </Grid.Column>

            <Grid.Column width={1}>
                <div className="x">
                    <Button textAlign="center" onClick={() => this.props.removeItem(this.props.treat)}>
                        Remove
                    </Button>
                </div>
            </Grid.Column>
           
            <Grid.Column width={3}>
                <h1 className="item">Price</h1>
                <div>
                    <Header as="h4" textAlign="center">
                        ${price}.00
                    </Header>
                </div>
            </Grid.Column>

            <Grid.Column width={3}>
                <h1 className="item">Quantity</h1>
                <div className="qty-button">
                <Header as="h4" textAlign="center">
                    <Button floated="left" onClick={this.decreaseItem}>
                        <span role="img" aria-label="minus">➖</span>
                    </Button>
                    {this.state.quantity}
                    {/* {this.props.treat.qty} */}
                    <Button floated="right" onClick={this.increaseItem}>
                        <span role="img" aria-label="plus">➕</span>
                    </Button>
                </Header>
                </div>
            </Grid.Column>
           
            <Grid.Column width={3}>
                <h1 className="total">Total</h1>
                <div className="price">
                    <Header as="h4" textAlign="center">
                        ${price}.00
                    </Header>
                </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </div>
        
        )
    }
}

export default CartPage;