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
            <b>Boutique de Chocolat</b> is an online store.
          </p>
          <p>
            Kreuther Handcrafted Chocolate is the creative collaboration between Chef Gabriel Kreuther and Pastry Chef Marc Aumont. After years of culinary partnership, including 10 years of working together at The Modern at The MoMA, the pair opened Kreuther Handcrafted Chocolate next door to restaurant Gabriel Kreuther in the winter of 2016.
          </p>
          <p>
            Only the finest quality ingredients and exceptional craftsmanship served in beautiful, thoughtful packaging represent the heart of Kreuther Handcrafted Chocolate. Providing quality confections with the cosmopolitan spirit of NYC; each bite is a tasting experience that stimulates your senses and evokes memories of cities around the world. A true chocolate artist, Chef Aumont, along with his team, create inventive chocolates, pastries, and chocolate sculptures rooted in classical French technique and inspired by traditional, yet surprising flavor combinations.
          </p>   
          <h1>CHOCOLATE AS STORYTELLING</h1>
          <p>
            Our chocolates take inspiration from the cosmopolitan spirit of New York City. It is the city itself that often provides inspiration for complex, multi-layered chocolate stories, like the mango aleppo and passionfruit bon bon, recalling the Mexican popsicles sold by street vendors. Because we are surrounded by every culture, every cuisine, we are exposed to unique culinary traditions from all over the world. As we showcase these flavors, we are conscious to respect their origins and blend them with complimentary ingredients to create complex and distinctive tasting experiences. 
          </p>
          <p>We are flavor creators, like a parfumier that creates a smell by blending front and back notes and other dimensions. Chocolate making requires more than just our sense of smell, but also sound, taste, touch and sight.
          </p>
          <p>When we begin creating a new flavor, it starts with the idea of telling a story and evoking a specific feeling through the medium of chocolate. We are careful to pick our ingredients, like pistachios from the San Biagio region of Sicily, or a green tea reminiscent of fragrances used to perfume a hammam, a Turkish bath. The blend of chocolate chosen also plays an important role. The chocolate bean has a story too—the terroir, the story of the people who grew it, who harvested it, the amount of time it was roasted for—these are all parts to the story.
          </p>
          <p>We have long-standing relationships with discerning suppliers that understand and respect our focus on quality ingredients: including Remy Martin, Valrhona Chocolate and Prova Gourmet. Our ultimate goal is to craft the best chocolate we can share with our community in New York City and around the world.
          </p>
        </div> 
      </div>
    </div>
  );
};

export default AboutPage;
