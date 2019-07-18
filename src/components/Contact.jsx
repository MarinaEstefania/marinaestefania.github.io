import React, {Component} from 'react';
import '../style/contact.css';

class Contact extends Component{
    render(){
        return(
            <div >
                 <p className="my-div-pre-title-contact">GET IN TOUCH</p>
                 <p className="my-div-title-contact">CONTACT</p>
          <div className="row my-flex">
                     <p className="my-description-contact">Let's make your website set appart from the competition!</p>
                     <div div class="col-sm-12 col-md-8 my-col" >
                   {/*  <p>Have a question or want to work together?</p> */}
                   {/* <p className="my-description-contact">Whether you would like my services for a project, get extra information on any of my work, ask me about this site or just say hello then I would love to hear from you.
                   </p> */}
                      <p p className="my-description-contact">
                     Do you have any question or just say hello?</p>
                    <p>
                      <a className="icon-redes-contact fa-3x " target="_blank" href="https://www.linkedin.com/in/MarinaEstefania/">
                        <i class="fab fa-linkedin-in"></i></a>  
                      <a className="icon-redes-contact fa-3x" target="_blank" href="https://github.com/MarinaEstefania">
                        <i class="fab fa-github"></i></a>  
                      <a className="icon-redes-contact fa-3x" target="_blank" href="mailto:m.garciac11@gmail.com">
                        <i class="fas fa-envelope"></i></a>                             
                    </p> 
                    </div>
                   {/*  <div class="col-sm-12 col-md-7 my-col my-flex">
                     <form>
                       <input className="d" placeholder="Name" type="text" required></input>
                       <input className="d" placeholder="Enter email" type="email" required></input>
                       <textarea className="d" placeholder="Your Message" type="email" spellCheck="false"></textarea>
                     <input className="my-submit" type="submit" value="SUBMIT" ></input>
                     </form> 
                    </div>*/}
                    </div>
                
                  
            </div>
        )
    }
}

export default Contact;