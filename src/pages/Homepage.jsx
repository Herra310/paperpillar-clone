import React from "react";
import Hero from "../components/Hero/Hero";
import Clients from "../components/Clients/Clients";
import Features from "../components/Features/Features";
import Content from '../components/Content/Content';
import { heroOne, heroTwo, heroThree, heroFour } from '../data/HeroData';
import { Heading } from "../globalStyles";

function Homepage() {
  return (
    <div>
      <Hero />
      <Features />
      <Clients/>
      <Heading id="projects"> Our Projects </Heading>
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Content {...heroFour} />
    
    </div>
  );
}

export default Homepage;
