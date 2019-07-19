import React, { Component } from "react";
import "../style/sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar ">
        {/*   <a href="#about">dsfsfsfdsfd</a> */}
        <a href="#services" />
        <a href="#clients" />
        <a href="#contact" />
      </div>
    );
  }
}

export default Sidebar;
