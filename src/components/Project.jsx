import React, { Component } from 'react';
import '../style/project.css';
import imagetry from '../img/liver.jpeg'
import mundodulce from '../img/mundodulce.jpeg'
import imagetry3 from '../img/pokegoal.jpeg'

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
                <div class="my-grid-row"> 

                    <div class="my-grid-column">

                        <div class="hovereffect">
                            <img  src={mundodulce}/>
                            <div class="overlay">
                        
                                <h2>Mediante la información que arroja la interfaz, el usuario puede tomar decisiones sobre como desea avanzar en el juego, ya sea completando misiones, evolucionando a sus pokemon o atrapando a uno en específico, por mencionar algunos ejemplos.
                                    <div className="div-icon-redes-projects">
                                        <a className="icon-redes-projects" target="_blank" href="https://infoooo.com/"><i class="fas fa-info-circle fa-2x"></i></a>  
                                        <a className="icon-redes-projects" target="_blank" href="https://red-social-595e4.firebaseapp.com/"><i class="fas fa-link fa-2x"></i></a>  
                                        <a className="icon-redes-projects" target="_blank" href="https://github.com/MarinaEstefania/GDL002-social-network"><i class="fab fa-github fa-2x"></i></a>
                                    </div>
                                </h2>
                                 
                            </div>
                        </div>
                        
                        <div class="my-div-grid"><img src={imagetry3}/></div>
                        <div class="my-div-grid"><img src={imagetry}/></div>
                    </div>

                    <div class="my-grid-column">
                        <img src={imagetry}/>
                        <img src={mundodulce}/>
                        <img src={imagetry3}/>
                    </div> 

                    <div class="my-grid-column">
                        <img src={imagetry3}/>
                        <img src={mundodulce}/>
                        <img src={imagetry}/>
                    </div> 

               {/*      <div class="my-grid-column">
                        <img src={imagetry3}/>
                        <img src={imagetry}/>
                        <img src={imagetry3}/>
                    </div> 
 */}
                </div>
            </section>

                            )
                        }
                    }
                    
export default Project;