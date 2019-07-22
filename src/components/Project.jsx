import React, { Component } from "react";
import "../style/project.css";
import infoProjects from "../data/info-projects";
import ModalProject from "./ModalProject";

class Project extends Component {
  constructor() {
    super();
    this.state = {
      infoProjects,
      projectCard: [],
      prueba: "prueba"
    };
  }

  render() {
    const projectCards = this.state.infoProjects.projects.map(i => {
      return (
        
          <div className="my-grid-column">
            <div className="div-img-project">
              <img className="img-project" src={i.img} />
              {i.name}
              <ModalProject info = {i} />
            </div>
          </div>
        
      );
    });
    return (
      <section className="my-project-row">
        <div className="my-div-pre-title-project ">
          <p>THE SELECTED OF </p>
        </div>
        <div className="my-div-title-project ">
          <p>MY WORK</p>
        </div>
        <div className="my-grid-row">
          {projectCards}
        </div>
      </section>
    );
  }
}

export default Project;
