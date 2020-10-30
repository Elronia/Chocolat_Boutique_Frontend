import React from "react"
import { Link } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

class TreatInfo extends React.Component {

    state = {
        treats: []
    }

    componentDidMount() {
        const id = this.props.match.params.id
        fetch(`http://localhost:3000/treats/${id}`)
            .then(resp => resp.json())
            .then((treat) => {
                this.setState({
                    treats: treat
                })
            })
    }

    handleClick = () => {
        this.props.addItemToCart(this.state.treats.id)
    }


    render() {
        const { treats } = this.state
        if (!treats) return <h3>Loading...</h3>
        const { name, price, image, description } = this.state.treats

        return (
            <div>
                <Grid columns='equal'>
                   
                    <Grid.Column width={8}>
                        <img src={image} />  
                    </Grid.Column>
                   
                    <div className="detail-name">
                        <p className="treat-name" >{name}</p>
                    </div>
                    
                    <Grid.Column >
                        <div>
                            <p> {description}</p>
                        </div>
                        <p>${price}.00</p>
                      
                        <button onClick={this.handleClick}>Add to Cart +</button>
                        {/* onClick={this.handleClick} */}
                    </Grid.Column>
                    
                </Grid>

            </div>     
        )
    }
}

export default TreatInfo;