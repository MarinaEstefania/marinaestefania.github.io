import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";

class Navbar extends Component {
  render() {
    return (
      <section className="navbar  d-none col-md-12 col-sm-12 d-sm-block my-navbar-padding">
        <div className="home">
         {/*  <div className = "home"> 
            <a href="#home"> Marina</a>
          </div> */}
         </div>
          <div className = "nav-categories"> 
            <a href="#home">Home</a>
            <a className="decoration-bar-navbar" href="#projects">Projects</a>
            <a className="decoration-bar-navbar" href="#about">About</a>
            <a className="decoration-bar-navbar" href="#contact">Contact</a>
          </div>
        
       
      </section>
    );
  }
}

export default Navbar;
