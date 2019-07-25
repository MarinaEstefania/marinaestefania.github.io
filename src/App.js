import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import CoverPage from "./components/CoverPage";
import Contact from "./components/Contact";
import StickyFooterMenu from "./components/StickyFooterMenu";

class App extends Component {
  render() {
    return (
      <div>
        <div className="col-sm-12 my-container main">
          <Navbar> </Navbar>
          <a name="home"> </a>
          <div className="row my-row">
            <div className="col-sm-12 my-col my-flex ">
              <CoverPage> </CoverPage>
            </div>
          </div>

          <a name="projects"> </a>
          <div className="row align-items-stretch my-row my-row-project">
            <div className="col-xs-12 col-sm-12 col-md-11 col-lg-9  my-col ">
              <Project> </Project>
            </div>
          </div>
          <a name="about"> </a>
          <div className="row align-items-stretch my-row my-row-about">
            <div className="col-xs-12 col-sm-12 col-md-11 col-lg-8 my-col">
              <About> </About>
            </div>
          </div>
          <a name="contact"> </a>
          <div className="row my-row my-row-contact">
            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8  my-col ">
              <Contact> </Contact>
            </div>
          </div>
        </div>

        <div className=" d-block d-sm-none col-md-12 col-sm-12 my-col my-row-stickyFooter ">
          <StickyFooterMenu> </StickyFooterMenu>
        </div>
      </div>
    );
  }
}

export default App;
