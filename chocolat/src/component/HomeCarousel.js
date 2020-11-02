import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../styling/HomeCarousel.css'
 
class HomeCarousel extends Component {
    render() {   //showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}
        return (
            <div className="slider-container">
            <Carousel className="carousel-style" showArrows={true} infiniteLoop useKeyboardArrows autoPlay> 
                <div>
                    <img src="https://res.cloudinary.com/dn1e07eul/image/upload/v1602955504/Chocolat/choc01_poises.jpg" />
                    <p className="legend"><h1>HANDCRAFTED PERFECTION</h1>Signature's Chef Selection</p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dn1e07eul/image/upload/v1602955506/Chocolat/choc17_quwptj.jpg" />
                    <p className="legend">Chocolate Travel Cake</p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dn1e07eul/image/upload/v1602955506/Chocolat/choc16_xxcf45.jpg" />
                    <p className="legend">Pistashio Travel Cake</p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dn1e07eul/image/upload/v1602956034/Chocolat/choc21_atrmd7.jpg" />
                    <p className="legend"><h1>UNSURPASSED QUALITY</h1>Assorted chocolate Bars</p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dn1e07eul/image/upload/v1602955507/Chocolat/choc19_tyxdt6.jpg" />
                    <p className="legend">40% Milk Chocolate Bars</p>
                </div>
            </Carousel>
            </div>
        );
    }
}
 
// ReactDOM.render(<HomeCarousel />, document.querySelector('.demo-carousel'));

export default HomeCarousel;