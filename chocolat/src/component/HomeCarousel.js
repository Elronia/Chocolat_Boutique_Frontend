import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../styling/HomeCarousel.css'
 
class HomeCarousel extends Component {
    render() {   //showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}
        return (
            <div className="slider-container">
            <Carousel className="carousel-style" showArrows={true} infiniteLoop useKeyboardArrows autoPlay={true}> 
                <div>
                    <img src="https://res.cloudinary.com/elronia/image/upload/v1604979246/Carousel/Bon_Bon_Candies_Width_nlolmo.jpg" />
                    <p className="legend"><h1>CONFECTIONS CRAFTED WITH INTERNATIONAL INGREDIENTS</h1>Our signature bon bons</p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/elronia/image/upload/v1604981987/Carousel/Caramel_Candy_Final_selbup.jpg" />
                    <p className="legend"><h1>INVENTIVE FLAVORS PAIRED WITH EXCEPTIONAL TECHNIQUE</h1>Award winning chocolates</p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/elronia/image/upload/v1604981610/Carousel/largeboxsquarever1_V3_aptvnn.jpg" />
                    <p className="legend"><h1>HANDCRAFTED PERFECTION</h1>Signature's Chef Selection</p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/elronia/image/upload/v1604982678/Carousel/Pistachio_Cake_Final_gjyxw5.jpg" />
                    <p className="legend">Pistashio Travel Cake</p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/elronia/image/upload/v1604980333/Carousel/Chocolate_Travel_Cake_Final_ocojrx.jpg" />
                    <p className="legend">Chocolate Travel Cake</p>
                </div>
                
                <div>
                    <img src="https://res.cloudinary.com/elronia/image/upload/v1604980849/Carousel/40_Milk_Chocolate_Bar_Final_veyfkm.jpg" />
                    <p className="legend">40% Milk Chocolate Bars</p>
                </div>
            </Carousel>
            </div>
        );
    }
}
 
// ReactDOM.render(<HomeCarousel />, document.querySelector('.demo-carousel'));

export default HomeCarousel;