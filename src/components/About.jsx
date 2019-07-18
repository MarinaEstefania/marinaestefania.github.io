import React, { Component } from 'react';
import '../style/about.css';
import aboutImage from '../img/fagreen.jpeg'
import softImage from '../img/team.png'
import firebase from '../img/firebase-logo.svg'

class About extends Component {
    render() {
        return (
            <div className="all-about">
                <p className="my-div-pre-title-about">SOMETHING</p>
                <p className="my-div-title-about">ABOUT ME</p>
                <div class="row my-row my-description-about  ">

                    <div className="col-sm-12 col-md-4 my-col ">  
                        <img className="my-img-about" src={aboutImage}/> 
                    </div>
                    <div class="col-sm-12 col-md-8 my-col my-hello-box">
                        {/* <p className="my-hey-title"> Hey!</p> */}
                        <p  className="helloP"> Hey! I'm so glad you are here! </p>
                        <p>My name is <span style={{fontWeight: "bold"}} >Marina Estefanía </span>.</p>
                        <p>I have a big sense of responsibility, <span style={{fontWeight: "bold"}} >I ask myself the because of the causes</span> and I focus on making them work.</p>
                        
                        <p> I'm a Biochemistry Engineer by profession, and I've always been interested in <span style={{fontWeight: "bold"}} >Information Technology, logic and mathematics</span> so now I decided become a Front End Developer.<span style={{color: "#ff8c9b"}}>❤</span></p>
                        <p>When I'm not online, I can be found swimming in the pool or watching series.</p>
                    </div>
                    
                </div>
                <div class="row my-row my-flex my-tools col-lg-9">
                    <div class=" col my-col  ">
                        <div class="row my-row my-flex my-skills-title"> Software Dev Tools</div>
                        <div className=" my-flex my-flex-wrap" >
                            <div  className=" icon-and-name-skills ">
                                <i class=" my-icon-tool devicon-react-original"></i>
                                <span>React</span>
                            </div>
                            <div  className=" icon-and-name-skills ">
                            <i class="my-icon-tool devicon-javascript-plain"></i>
                                <span>Javascript</span>
                                <span>  </span>
                            </div>
                            <div  className=" icon-and-name-skills ">
                            <i class="my-icon-tool devicon-html5-plain"></i>
                                <span>HTML5</span>
                            </div>
                            <div  className=" icon-and-name-skills ">
                            <i class="my-icon-tool devicon-css3-plain"></i>
                                <span>CSS3</span>
                            </div>
                           <div className=" icon-and-name-skills firebase-div">
                            <img className="firebase-icon" src={firebase}/> 
                                <span>Firebase</span>
                            </div>
                            <div  className=" icon-and-name-skills ">
                            <i class="my-icon-tool devicon-nodejs-plain"></i>
                                <span>NodeJS</span>
                            </div>
                            <div  className=" icon-and-name-skills ">
                            <i class="my-icon-tool devicon-bootstrap-plain"></i>
                                <span>Bootstrap</span>
                            </div>
                            <div  className=" icon-and-name-skills ">
                            <i class="my-icon-tool devicon-git-plain"></i>
                                <span>GIT</span>
                            </div>
                            <div  className=" icon-and-name-skills ">
                            <i class="my-icon-tool devicon-github-plain"></i>
                                <span>GitHub</span>
                            </div>
                            <div  className=" icon-and-name-skills ">
                            <i class="my-icon-tool devicon-mongodb-plain"></i>
                                <span>MongoDB</span>
                            </div>
                            <div  className=" icon-and-name-skills ">
                            <i class="my-icon-tool devicon-express-original"></i>
                                <span>Express</span>
                            </div>
                        </div>
                   {/*      <div class="row my-row my-flex">
                             <table className="my-table">
                                <tr>
                                    <td className="my-icon-tool"><i class="devicon-react-original colored"></i></td>
                                    <td>React</td>
                                </tr>
                                <tr>
                                    <td className="my-icon-tool"><i class="devicon-javascript-plain colored"></i></td>
                                    <td>Javascript</td>
                                </tr>
                                <tr>
                                    <td className="my-icon-tool"><i class="devicon-html5-plain colored"></i></td>
                                    <td>HTML 5</td>
                                </tr>
                                <tr>
                                    <td className="my-icon-tool"><i class="devicon-css3-plain colored"></i></td>
                                    <td>CSS 3</td>
                                </tr>
                            </table>
                            <table className="my-table">
                            <tr>
                                    <td className="my-icon-tool"><i class="devicon-nodejs-plain-wordmark colored"></i></td>
                                    <td>Node JS</td>
                                </tr>
                            <tr>
                                    <td className="my-icon-tool"><i class="devicon-bootstrap-plain colored"></i></td>
                                    <td>Bootstrap</td>
                                </tr>
                                <tr>
                                    <td className="my-icon-tool"><i class="devicon-git-plain colored"></i></td>
                                    <td>GIT</td>
                                </tr>
                                <tr>
                                    <td className="my-icon-tool"><i class="devicon-mongodb-plain colored"></i></td>
                                    <td>Mongo DB</td>
                                </tr>
                            </table>
                           
                        </div> */}
                    </div>
                </div>



            </div>
        )
    }
}

export default About;