import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header/Header";
import LiveUpdate from "./LiveUpdate/LiveUpdate";
import NewsLetter from "./NewsLetter/NewsLetter";
import Reviews from "./Reviews/Reviews/Reviews";
import Services from "./Services/Services/Services";
import Symptoms from "./Symptoms/Symptoms";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Services></Services>
      <LiveUpdate></LiveUpdate>
      <Symptoms></Symptoms>
      <Reviews></Reviews>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
};

export default Home;
