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
        let { id, name, price, image } = this.props.treats

        return(
            <Link className="treat-card" to={`/treats/${id}`}>
                <img src={image} width="350" height="250"/>
                <p className="info">{name}</p>
                <p className="info">{`Price: $` + price + `.00`}</p>
            </Link> 
                
            // <Grid centered columns={2}>
            //     <Grid.Column>
            //         <Link to={`/treats/${id}`}>
            //             <Image src={image} size="massive"/>
            //             {/* onClick={() => this.props.onPageChange("item-detail")} */}
            //         </Link>
            //             <p className="name">{name}</p>
            //             <p className="price">${price}.00</p>
            //     </Grid.Column>
            // </Grid>
        )
    }
}

export default TreatCard;