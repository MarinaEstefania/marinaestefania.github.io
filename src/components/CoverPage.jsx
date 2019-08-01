import React, { Component } from "react";
import "../style/coverPage.css";

class CoverPage extends Component {
  render() {
    return (
      <div>
        <div className="row my-cover-row my-row">
          <div className="col-12 my-col my-flex my-row-letters my-img-cover ">
            <div className="row col-lg-12 my-row my-row-cover-letters">
              <p className="my-col-marina"> MARINA ESTEFANIA</p>
              <p className="my-col-front"> FRONTEND DEVELOPER</p>
              
          </div>
          <section className="my-row my-row-cover-redes">
              <a
                className="icon-redes-cover"
                target="_blank"
                href="https://www.linkedin.com/in/MarinaEstefania/"
              >
                <i className="fab fa-linkedin-in fa-lg" />
              </a>
              <a
                className="icon-redes-cover"
                target="_blank"
                href="https://github.com/MarinaEstefania"
              >
                <i className="fab fa-github fa-lg " />
              </a>
              <a
                className="icon-redes-cover"
                target="_blank"
                href="mailto:m.garciac11@gmail.com"
              >
                <i className="fas fa-envelope fa-lg" />
              </a>
            </section>
            </div>

            
              </div>
      </div>
    );
  }
}

export default CoverPage;
