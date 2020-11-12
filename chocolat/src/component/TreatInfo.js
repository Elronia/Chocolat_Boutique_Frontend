import React from 'react';
import '../styling/TreatInfo.css';

class TreatInfo extends React.Component {

    state = {
        treat: {}
    }

    // Getting treat data on page load
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
            <div className="treat-info-container">
                   
                    <div className="product-details-image">
                        <img src={image} />  
                    </div>
                    
                    <div className="product-details-wrapper">
                        <div >
                            <h1 className="treat-name"> {name} </h1> 
                        </div>
                    
                            <div className="description">
                                <p> {description}</p>
                            </div>
                            <div className="price">
                                <p>${price}.00</p>
                            </div>
                            
                            <button className="add-button" onClick={this.handleClick}> Add to Cart </button>
                            {/* onClick={this.handleClick} */}
                        
                    </div>
                    

            </div>     
        )
    }
}

export default TreatInfo;