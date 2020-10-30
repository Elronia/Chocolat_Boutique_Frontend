import React from 'react'
import './TreatList.css';
import TreatCard from './component/TreatCard';

const TreatList = (props) => {
    //get info from props, from App.js
        return(<div className="container">
               <h1>OUR CHOCOLATE COLLECTION</h1>	
                {props.treats.map((treatsObj) => (	//iterate(treatsObj)
                    <TreatCard 
                        key={treatsObj.id}
                        treats={treatsObj}	
                        onPageChange={props.onPageChange}
                        cartActions={props.cartActions}
                    />
                                               
                    // <div>  
                    //     <img src={treat.image} width="350" height="250"/>
                    //     <p>{treat.name}</p>
                    //     <p>{`Price: $` + treat.price + `.00`}</p>
                    // </div>	
        ))}</div>)

}

export default TreatList;
