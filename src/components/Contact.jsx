import React, { Component } from "react";
import "../style/contact.css";

class Contact extends Component {
  render() {
    return (
      <section>
        <div className="col-12 my-col my-flex "></div>
        <p className="my-div-pre-title pre-title-contact">ANY QUESTIONS?</p>
        <p className="my-div-title-contact">CONTACT ME</p>
        <div className="row my-flex">
          <div div className="col-sm-12 col-md-8 my-col">
        
           
            <p>
              <a
                className="icon-redes-contact fa-2x "
                target="_blank"
                href="https://www.linkedin.com/in/MarinaEstefania/"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                className="icon-redes-contact fa-2x"
                target="_blank"
                href="https://github.com/MarinaEstefania"
              >
                <i className="fab fa-github" />
              </a>
              <a
                className="icon-redes-contact fa-2x"
                target="_blank"
                href="mailto:m.garciac11@gmail.com"
              >
                <i className="fas fa-envelope" />
              </a>
             
            </p>
        
          </div>
        {/*  <p p className="my-description-contact">
              Also check my cv
            </p> */}
        </div>
      </section>
    );
  }
}

export default Contact;
