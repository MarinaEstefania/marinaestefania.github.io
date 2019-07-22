import React, { Component } from "react";
import "../style/project.css";
import pokegoal from "../img/pokegoal.jpeg";
import bq from "../img/bqmu.jpg";
import organa from "../img/organamu.jpg";
import mdlinks from "../img/mdlinksmu.jpg";
import BQModal from "./Modals/BQModal";

class Project extends Component {
  render() {
    return (
      <section className="my-project-row">
        <div className="my-div-pre-title-project ">
          <p>THE SELECTED OF </p>
        </div>
        <div className="my-div-title-project ">
          <p>MY WORK</p>
        </div>
        <div className="my-grid-row">
          <div className="my-grid-column">
            <div className="div-img-project">
              <img className="img-project" src={organa} />
              ORGANA
              <BQModal />
            </div>

            {/*    <div className="div-img-project">
                            <img src={mundodulce}/>
                            PokeGoal  <Examples></Examples>
                        </div> */}
          </div>

          <div className="my-grid-column">
            <div className="div-img-project">
              <img className="img-project" src={bq} />
              BURGER QUEEN
              <BQModal />
            </div>
          </div>

          <div className="my-grid-column">
            <div className="div-img-project">
              <img className="img-project" src={pokegoal} />
              POKEGOAL
              <BQModal />
            </div>
          </div>

          <div className="my-grid-column">
            <div className="div-img-project">
              <img className="img-project" src={mdlinks} />
              MdLINKS
              <BQModal />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Project;
