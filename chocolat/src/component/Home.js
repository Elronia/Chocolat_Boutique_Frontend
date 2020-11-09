import React from 'react';
import '../styling/Home.css'
import HomeCarousel from './HomeCarousel';

class Home extends React.Component{
    render(){
        return (
            <div>
                {/* <h1 className="welcome">Welcome to BOUTIQUE DE CHOCOLAT</h1> */}
                <HomeCarousel/>
            </div>
        )
    }
}

export default Home;