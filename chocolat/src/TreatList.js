import React from 'react'
import './TreatList.css';

const TreatList = (props) => {
    //get info from props, from App.js
        return(<div className="container">
               <h1>Our Chocolate Collection</h1>	
                {props.treats.map((item, id) => (	//<TreatCard
                                                   //key={itemsObj.id}
                                                   //items={itemsObj}	
                                              //onPageChange={props.onPageChange}
                                                    //cartActions={props.cartActions}/>
                    <div>  
                        <img src={item.image} width="350" height="250"/>
                        <p>{item.name}</p>
                        <p>{`Price: $` + item.price + `.00`}</p>
                    </div>	
        ))}</div>)

}

export default TreatList;
