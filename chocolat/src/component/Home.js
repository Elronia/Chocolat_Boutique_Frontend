import React from 'react';
import HomeCarousel from './HomeCarousel';

class Home extends React.Component{
    render(){
        return (
            <div>
                <h1>Welcome to BOUTIQUE DE CHOCOLAT</h1>
                <HomeCarousel/>
            </div>
        )
    }
}

export default Home;