import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import '../styling/TreatInfo.css';

class TreatInfo extends React.Component {

    state = {
        treat: {}
    }


    componentDidMount() {
        const id = this.props.match.params.id
        fetch(`http://localhost:3000/treats/${id}`)
            .then(resp => resp.json())
            .then((treat) => {
                this.setState({
                    treat: treat //you can put just treat
                });
            })
    }
    
      handleClick = () => {
          const { addItemToCart } = this.props
          addItemToCart(this.state.treat.id)
      }

    render() {
        const { treat } = this.state
        if (!treat) return <h3>Loading...</h3>
        const { name, price, image, description } = this.state.treat

        return (
            <div>
                <Grid columns='equal'>
                   
                    <Grid.Column width={8}>
                        <img src={image} />  
                    </Grid.Column>
                    
                    <div className="product-details-wrapper">
                        <div >
                            <h1 className="treat-name"> {name} </h1> 
                        </div>
                    
                        <Grid.Column >
                            <div>
                                <p> {description}</p>
                            </div>
                            <p className="price">${price}.00</p>
                      
                            <button className="add-button" onClick={this.handleClick}> Add to Cart </button>
                            {/* onClick={this.handleClick} */}
                        </Grid.Column>
                    </div>
                    
                </Grid>

            </div>     
        )
    }
}

export default TreatInfo;