import React from 'react';
import { Grid, Image, Header, Button } from "semantic-ui-react";


class CartPage extends React.Component {

    state = {
      quantity: 1,
      show: true,
    //   max: 5,
    //   min: 0,
      cartArray: []
    }
  
    increaseItem = () => {
        this.setState(prevState => {
            if (prevState.quantity < 9) {
                return {
                    quantity: prevState.quantity + 1
                }
            } else {
                return null
            }
        })
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
                <h1>{name}</h1>
            </Grid.Column>
           
            <Grid.Column width={3}>
                <h1 className="item">Price</h1>
                <div>
                    <Header as="h1" textAlign="center">
                        ${price}.00
                    </Header>
                </div>
            </Grid.Column>

            <Grid.Column width={2}>
                <h1>Quantity</h1>
                <div>
                <Header as="h1" textAlign="center">
                    <Button floated="left" onClick={this.decreaseItem}>
                        <span role="img"aria-label="minus">➖</span>
                    </Button>
                    {this.state.quantity}
                    <Button floated="right" onClick={this.increaseItem}>
                        <span role="img" aria-label="plus">➕</span>
                    </Button>
                </Header>
                </div>
            </Grid.Column>
           
            <Grid.Column width={3}>
                <h1>Subtotal</h1>
                <div className="subtotal">
                    <Header as="h1" textAlign="center">
                        ${price}.00
                    </Header>
                </div>
            </Grid.Column>

            <Grid.Column width={1}>
                <div className="x">
                    <Header textAlign="center" onClick={()=>this.props.removeItem(this.props.item)}>
                        X
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