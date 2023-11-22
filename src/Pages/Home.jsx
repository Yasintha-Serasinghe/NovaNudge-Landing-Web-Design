import React from "react";
import Stats from "../Components/Stats";
import Hero from "../Components/Hero";
import Content from "../Components/Content";
import Price from "../Components/PriceSection";
import News from "../Components/News";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <Content />
      <Stats />
      <Price />
      <News />
      <Footer />
    </div>
  );
}

export default Home;
