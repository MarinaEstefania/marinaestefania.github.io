import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/stickyFooterMenu.css";

class StickyFooterMenu extends Component {
  render() {
    return (
      <div className="navbarF">
        <div className="justify-content-center my-flex">
          <a href="#home">
            <i className="fas fa-home fa-2x my-flex" />Home
          </a>
          <a href="#projects">
            <i className="fas fa-briefcase fa-2x my-flex" />Projects
          </a>
          <a href="#about">
            <i className="fas fa-user fa-2x my-flex" />About
          </a>
          <a href="#contact">
            <i className="fas fa-address-book fa-2x my-flex" />Contact
          </a>
        </div>
      </div>
    );
  }
}

export default StickyFooterMenu;
