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
      <section>
        <section className="col-sm-12 my-container main">
          <Navbar> </Navbar>
          <a name="home"> </a>
          <section className="row my-row">
            <section className="col-sm-12 my-col my-flex ">
              <CoverPage> </CoverPage>
            </section>
          </section>
          <a name="about"> </a>
          <section className="row align-items-stretch my-row my-row-about">
            <section className="col-xs-12 col-sm-12 col-md-11 col-lg-8 my-col">
              <About> </About>
            </section>
          </section>
          <a name="projects"> </a>
          <section className="row align-items-stretch my-row my-row-project">
            <section className="col-xs-12 col-sm-12 col-md-11 col-lg-9  my-col ">
              <Project> </Project>
            </section>
          </section>

          <a name="contact"> </a>
          <section className="row my-row my-row-contact">
            <section className="col-xs-12 col-sm-12 col-md-10 col-lg-8  my-col ">
              <Contact> </Contact>
            </section>
          </section>
        </section>

        <section className=" d-block d-sm-none col-md-12 col-sm-12 my-col my-row-stickyFooter ">
          <StickyFooterMenu> </StickyFooterMenu>
        </section>
      </section>
    );
  }
}

export default App;
