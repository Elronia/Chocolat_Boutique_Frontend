import React from 'react';
import { Link } from 'react-router-dom';
// import { Image } from 'semantic-ui-react';
// import { Grid } from 'semantic-ui-react';
import '../styling/TreatCard.css';


class TreatCard extends React.Component {
    handleClick = () => {
        this.props.cartActions.addItemToCart(this.props.treats.id)
    }
    
    render() {
        //getting properties and saving into variables
        let { id, name, price, image } = this.props.treats

        return(
            <Link 
                className="treat-card" 
                to={`/treats/${id}`} 
                onClick={(evt) => this.props.updateActiveMenuItem(evt, {name: "treat"})}>
                <img src={image} width="350" height="250"/>
                <p className="info">{name}</p>
                <p className="info">{`Price: $` + price + `.00`}</p>
            </Link> 
        )
    }
}

export default TreatCard;