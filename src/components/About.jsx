import React, { Component } from 'react';
import '../style/about.css';
import aboutImage from '../img/about.jpg'

class About extends Component {
    render() {
        return (
            <div>
                <p className="my-div-pre-title-about">SOMETHING</p>
                <p className="my-div-title-about">ABOUT ME</p>
                <div class="row my-row my-description-about">

                    <div class="col-sm-12 col-md-5 my-col">
                        <p >
                           ¡Hello You! my name is Marina Estefanía.
  I have a bachelor degree in Biochemical Engineer, but I've always been interested in the IT area so now I decided become a Front End Developer.
I like to work on interesting projects with good people and make things work as they should be.
When I'm not online, I can be found swimming in the pool or watching stream series. 
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-4 my-col">  
                        <img src={aboutImage}/> 
                    </div>
                    <div class="col-sm-12 col-md-3 my-col my-flex ">
                    
                            <div  >
                            <ul className="my-skills">
                               
                                <li>CSS 3 </li>
                                <li>Firebase</li>
                                <li>Git</li>
                                <li>English</li>
                                <li>softskills</li>
                            </ul>
                            </div>
                            <div>
                            <ul className="my-skills">
                                <li> React</li>
                                <li>Javascript</li>
                                <li>HTML 5</li>
                                <li>CSS 3 </li>
                                <li>Firebase</li>
                              
                            </ul>
                            </div>
                    </div>
                </div>



            </div>
        )
    }
}

export default About;