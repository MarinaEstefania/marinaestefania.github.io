import React, { Component } from "react";
import "../style/about.css";
import aboutImage from "../img/fagreen.jpeg";
import api from "../img/api.png"
import firebase from "../img/firebase-logo.svg";
import team from "../img/team.png"
import english from "../img/talk.png"
import self from "../img/self.png"
import responsable from "../img/responsable.png"
import solving from "../img/solving.png"
import research from "../img/research.png"
import planning from "../img/planning.png"
import scrum from "../img/scrum.png"



class About extends Component {
  render() {
    return (
      <section className="all-about">
        <p className="my-div-pre-title">SOMETHING</p>
        <p className="my-div-title-about">ABOUT ME</p>

        <div className="row my-row my-description-about  ">
          <div className="col-sm-12 col-md-4 my-col ">
            <img className="my-img-about" src={aboutImage} />
          </div>
          <div className="col-sm-12 col-md-8 my-col my-hello-box">
            <p>
              Hello! My name is{" "}
              <span style={{ fontWeight: "bold" }}>Marina Estefanía</span>.
            </p>
            <p>
              I'm a Biochemistry Engineer by profession, and I've always been
              interested in{" "}
              <span style={{ fontWeight: "bold" }}>
                Information Technology, logic and mathematics
              </span>{" "}
              so now I decided become a Front End Developer
              <span style={{ color: "#ff8c9b" }}> ❤</span>.
            </p>
            <p>
              I have a big sense of responsibility,{" "}
              <span style={{ fontWeight: "bold" }}>
                I ask myself the why of the things
              </span>{" "}
              and I focus on{" "}
              <span style={{ fontWeight: "bold" }}>solving them.</span>
            </p>

            <p>
              When I'm not online, I can be found watching series or swimming in
              the pool.
            </p>
          </div>
        </div>
        <div className="row my-row my-flex my-tools">
          <div className=" col-6 my-col dev-tools tools ">
            
            <div className="row my-row my-flex my-skills-title ">
              {" "}
              Software Dev Tools
            </div>
            <div className=" my-flex my-flex-wrap">
              <div className=" icon-and-name-skills ">
                <i className=" my-icon-tool devicon-react-original" />
                <span>React</span>
              </div>
              <div className=" icon-and-name-skills ">
                <i className="my-icon-tool devicon-javascript-plain" />
                <span>Javascript</span>
                <span> </span>
              </div>
              <div className=" icon-and-name-skills ">
                <i className="my-icon-tool devicon-html5-plain" />
                <span>HTML5</span>
              </div>
              <div className=" icon-and-name-skills ">
                <i className="my-icon-tool devicon-css3-plain" />
                <span>CSS3</span>
              </div>
              <div className=" icon-and-name-skills firebase-div">
                <img className="firebase-icon" src={firebase} />
                <span>Firebase</span>
              </div>
              <div className=" icon-and-name-skills ">
                <i className="my-icon-tool devicon-nodejs-plain" />
                <span>NodeJS</span>
              </div>
              <div className=" icon-and-name-skills ">
                <i className="my-icon-tool devicon-bootstrap-plain" />
                <span>Bootstrap</span>
              </div>
              <div className=" icon-and-name-skills ">
                <i className="my-icon-tool devicon-git-plain" />
                <span>GIT</span>
              </div>
              <div className=" icon-and-name-skills ">
                <i className="my-icon-tool devicon-github-plain" />
                <span>GitHub</span>
              </div>
              <div className=" icon-and-name-skills firebase-div ">
                <img className="firebase-icon" src={api} />
                <span>API</span>
              </div> {/*
              <div className=" icon-and-name-skills ">
                <i className="my-icon-tool devicon-express-original" />
                <span>Express</span>
              </div> */}
            </div>
          </div>
          <div className=" col-6 my-col  tools ">
            <div className="row my-row my-flex my-skills-title">
              {" "}
              Skills
            </div>
            <div className=" my-flex my-flex-wrap">
            <div className=" icon-and-name-skills firebase-div">
              <img className="firebase-icon" src={self} />
                <span>Self-Learning</span>
              </div>
              <div className=" icon-and-name-skills firebase-div">
              <img className="firebase-icon" src={responsable} />
                <span>Responsability</span>
                <span> </span>
              </div>
              <div className=" icon-and-name-skills firebase-div">
              <img className="firebase-icon" src={solving} />
                <span>Problem Solving</span>
              </div>
              <div className=" icon-and-name-skills firebase-div">
              <img className="firebase-icon" src={team} />
                <span>Team Work</span>
              </div>
              <div className=" icon-and-name-skills firebase-div">
                <img className="firebase-icon" src={planning} />
                <span>Planning</span>
              </div>
              <div className=" icon-and-name-skills firebase-div">
                <img className="firebase-icon" src={research} />
                <span>Research</span>
              </div>
              <div className=" icon-and-name-skills firebase-div">
              <img className="firebase-icon" src={scrum} />
                <span>Scrum</span>
              </div>
              <div className=" icon-and-name-skills firebase-div">
              <img className="firebase-icon" src={english} />
                <span>English LevelB2</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
