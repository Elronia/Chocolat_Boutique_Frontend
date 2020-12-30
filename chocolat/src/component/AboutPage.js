import React from "react";
import "../styling/AboutPage.css";
// import BackButton from "./BackButton";

const AboutPage = () => {
  return (
    <div id="about-container">
      <div>
        <h1 className="header">ABOUT</h1>
        <div className="emphasized">
          <p>
            {" "}
            <b classname="">Boutique de Chocolat</b> is an online e-commerce web application selling premier handcrafted chocolate. It's built for demonstrational purpose only.
          </p>
          <p>
            Only the finest quality ingredients and exceptional craftsmanship served in beautiful, thoughtful packaging represent the heart of Boutique de Chocolat. Providing quality confections with the cosmopolitan spirit of NYC; each bite is a tasting experience that stimulates your senses and evokes memories of cities around the world. Chocolates and pastries rooted in classical French technique and inspired by traditional, yet surprising flavor combinations are represented at Boutique de Chocolat.
          </p>   
          <h1>BOUTIQUE de CHOCOLAT as STORYTELLING</h1>
          <p>
            Boutique de Chocolat is a full-stack web application built using Rails API backend and React for the frontend.  
          </p>
          <p>
            Clicking on the Logo in the center of the navigation bar redirects you to the Homepage where you can see the collection of selected fine handcrafted chocolates.
          </p>
          <p> 
            Going to the Shop tab you can explore our collection of chocolate treats along with the price and use the Search input to look for chocolates by name.
          </p>
          <p>
            Pressing on the product will redirect you to the Item page where you can see more details about the product and be able to add it to the cart. Once added to the cart, the cart will be updated.
          </p>
          <p>
            On the Cart page, you can change the quantity, remove the item, or proceed to Checkout.
          </p>
          <p>
            For Checkout, you will need to create an account. In case you have one you just need to sign in. Creating an account is available from either the Checkout form (if you aren’t signed in) or from the Sign In page.
          </p>
          <p>
            To be able to complete the purchase you will need to provide your shipping address, choose the shipping method, and billing information for the Stripe form (do not enter the real card info).
          </p>
        </div> 
      </div>
    </div>
  );
};

export default AboutPage;
