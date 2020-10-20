import React from 'react'

const TreatList = (props) => {
    //get info from props, from App.js
        return(<div>	
            {props.treats.map((item, id) => (		
            <div>
                <img src={item.image} width="350" height="250"/>
                <p>{item.name}</p>
                <p>{`Price: $` + item.price}</p>
            </div>	
        ))}</div>)

}


export default TreatList;
