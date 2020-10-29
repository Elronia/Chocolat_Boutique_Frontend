import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';

class TreatCard extends React.Component {
    render() {
        let { id, name, price, image } = this.props.treats

        return(
            <Grid centered columns={2}>
                <Grid.Column>
                    <Link to={`/treats/${id}`}>
                        <Image src={image} />
                        {/* onClick={() => this.props.onPageChange("item-detail")} */}
                    </Link>
                        <p className="name">{name}</p>
                        <p className="price">${price}.00</p>
                </Grid.Column>
            </Grid>
        )
    }
    
}

export default TreatCard;