import React, { Component } from "react";
import "../style/project.css";
import infoProjects from "../data/info-projects";
import ModalProject from "./ModalProject";

class Project extends Component {
  constructor() {
    super();
    this.state = {
      infoProjects,
      projectCard: []
    };
  }

  render() {
    const projectCards = this.state.infoProjects.projects.map(i => {
      return (
        
          <div className="my-grid-column" key={i.id}>
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
        <div>
          <p className="my-div-pre-title" >A FEW OF MY</p>
        </div>
        <div className="my-div-title-project ">
          <p>PROJECTS</p>
        </div>
        <div className="my-grid-row">
          {projectCards}
        </div>
      </section>
    );
  }
}

export default Project;
