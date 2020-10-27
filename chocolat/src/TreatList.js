import React from 'react'
import './TreatList.css';

const TreatList = (props) => {
    //get info from props, from App.js
        return(<div className="container">	
            {props.treats.map((item, id) => (		
            <div>
                <img src={item.image} width="350" height="250"/>
                <p>{item.name}</p>
                <p>{`Price: $` + item.price + `.00`}</p>
            </div>	
        ))}</div>)

}

export default TreatList;
