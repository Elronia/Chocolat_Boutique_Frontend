import React from "react";
// import "../styling/AboutPage.css";
// import BackButton from "./BackButton";

const AboutPage = () => {
  return (
    <div id="about-container">
      <div className="ui piled segment">
        <h1 className="ui header">About</h1>
        <div className="emphasized">
          <p>
            {" "}
            <b>Chocolat Boutique</b> is an online marketplace  <u>not</u>{" "}
            Kreuther Handcrafted Chocolate is the creative collaboration between Chef Gabriel Kreuther and Pastry Chef Marc Aumont. After years of culinary partnership, including 10 years of working together at The Modern at The MoMA, the pair opened Kreuther Handcrafted Chocolate next door to restaurant Gabriel Kreuther in the winter of 2016.
          </p>
          <p>
            Only the finest quality ingredients and exceptional craftsmanship served in beautiful, thoughtful packaging represent the heart of Kreuther Handcrafted Chocolate. Providing quality confections with the cosmopolitan spirit of NYC; each bite is a tasting experience that stimulates your senses and evokes memories of cities around the world. A true chocolate artist, Chef Aumont, along with his team, create inventive chocolates, pastries, and chocolate sculptures rooted in classical French technique and inspired by traditional, yet surprising flavor combinations.
          </p>   
        </div> 
      </div>
      {/* <BackButton /> */}
    </div>
  );
};

export default AboutPage;
