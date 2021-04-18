import React from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container" id="home">
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
};

export default Header;
