import React, { Component } from "react";
import "../style/project.css";
import imagetry from "../img/mdl.png";
import mundodulce from "../img/mundodulce.jpeg";
import pokegoal from "../img/pokegoal.jpeg";
import bq from "../img/bq.JPG";
import organa from "../img/organa.JPG";
import OrganaModal from "./Modals/OrganaModal";

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
              <img className="img-project" src={pokegoal} />
              ORGANA
              <OrganaModal />
            </div>

            {/*    <div className="div-img-project">
                            <img src={mundodulce}/>
                            PokeGoal  <Examples></Examples>
                        </div> */}
          </div>

          <div className="my-grid-column">
            <div className="div-img-project">
              <img className="img-project" src={pokegoal} />
              BURGER QUEEN
              <OrganaModal />
            </div>
          </div>

          <div className="my-grid-column">
            <div className="div-img-project">
              <img className="img-project" src={pokegoal} />
              POKEGOAL
              <OrganaModal />
            </div>
          </div>

          {/*  <div className="my-grid-column">
                        <div className="div-img-project">
                            <img className="img-project" src={imagetry}/>
                            MdLinks 
                            <OrganaModal></OrganaModal>
                        </div>
                    </div>  */}
        </div>
      </section>
    );
  }
}

export default Project;
