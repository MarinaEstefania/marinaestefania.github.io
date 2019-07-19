import React, { Component } from "react";
import "../style/coverPage.css";

class CoverPage extends Component {
  render() {
    return (
      <div>
        <div className="row my-cover-row my-row">
          <div className="col-sm-12 col-lg-6 my-col my-flex my-row-letters ">
            <div className="row col-lg-8 my-row my-row-cover-letters">
              <p className="my-col-quote">
                "The best preparation for tomorrow is doing your best today"
              </p>
              <p className="my-col-marina"> MARINA ESTEFANIA</p>
              <p className="my-col-front"> FRONT-END DEVELOPER</p>
            </div>

            <div className="row col-lg-8 my-row my-row-cover-redes">
              <a
                className="icon-redes-cover"
                target="_blank"
                href="https://www.linkedin.com/in/MarinaEstefania/"
              >
                <i class="fab fa-linkedin-in " />
              </a>
              <a
                className="icon-redes-cover"
                target="_blank"
                href="https://github.com/MarinaEstefania"
              >
                <i class="fab fa-github  " />
              </a>
              <a
                className="icon-redes-cover"
                target="_blank"
                href="mailto:m.garciac11@gmail.com"
              >
                <i class="fas fa-envelope" />
              </a>
            </div>
          </div>

          <div className="col-sm-12 col-lg-6 my-col my-img-cover" />
        </div>
      </div>
    );
  }
}

export default CoverPage;
