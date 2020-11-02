import React from 'react'
import TreatCard from './TreatCard';
import '../styling/TreatList.css';

const TreatList = (props) => {
    //get info from props, from App.js
        return(<div className="container">
               <h1 className="collection-header">OUR CHOCOLATE COLLECTION</h1>	
               <div className="treat-card-container">
               {props.treats.map((treatsObj) => (	//iterate(treatsObj)
                    <TreatCard 
                        key={treatsObj.id}
                        treats={treatsObj}	
                        onPageChange={props.onPageChange}
                        cartActions={props.cartActions}
                    />
                                	
                ))}
               </div>
                </div>)

}

export default TreatList;