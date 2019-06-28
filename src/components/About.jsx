import React, { Component } from 'react';
import '../style/about.css';
import aboutImage from '../img/fagreen.jpeg'
import softImage from '../img/team.png'

class About extends Component {
    render() {
        return (
            <div className="all-about">
                <p className="my-div-pre-title-about">SOMETHING</p>
                <p className="my-div-title-about">ABOUT ME</p>
                <div class="row my-row my-description-about  ">

                    <div className="col-sm-12 col-md-6 my-col ">  
                        <img className="my-img-about" src={aboutImage}/> 
                    </div>
                    <div class="col-sm-12 col-md-6 my-col my-hello-box">
                        {/* <p className="my-hey-title"> Hey!</p> */}
                        <p  className="helloP"> Hey! I'm so glad you are here! </p>
                        <p>My name is <span style={{fontWeight: "bold"}} >Marina Estefanía </span>.</p>
                        <p>I have a bachelor degree in Biochemical Engineer, but I've always been interested in the IT area so now I decided become a <span style={{fontWeight: "bold"}} >Front End Developer. </span></p>
                        <p>I like to work on interesting projects with good people and <span style={{fontWeight: "bold"}} >make things work <span style={{color: "#ff8c9b"}}>❤</span>. </span> </p>
                        <p>When I'm not online, I can be found swimming in the pool or watching series.
                        </p>
                    </div>
                    
                </div>
                <div class="row my-row my-flex my-tools">
                    <div class=" col my-col  ">
                        <div class="row my-row my-flex my-skills-title"> Software Dev Tools</div>
                        <div class="row my-row my-flex">
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
                           
                        </div>
                    </div>
                    <div class=" col my-col  ">
                        <div class="row my-row my-flex my-skills-title"> Soft Skills</div>
                        <div class="row my-row my-flex">
                        <table className="my-table">
                                <tr>
                                    <td className="my-icon-tool"><img className="my-img-soft" src={softImage}/> </td>
                                </tr>
                        </table>
                        <table className="my-table">
                                <tr>
                                    <td>Self-Learning</td>
                                </tr>
                                <tr>
                                    <td>Responsability</td>
                                </tr>
                                <tr>
                                    <td>Problem Solving</td>
                                </tr>
                                <tr>
                                    <td>Team Work</td>
                                </tr>
                                <tr>
                                    <td>Planning</td>
                                </tr>
                                <tr>
                                    <td>Researching</td>
                                </tr>   
                                <tr>
                                    <td>Empathy</td>
                                </tr> 
                            </table>                            
                        </div>
                    </div>
                </div>



            </div>
        )
    }
}

export default About;