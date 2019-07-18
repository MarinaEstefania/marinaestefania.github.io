import React, { Component } from "react";
import "../style/coverPage.css";

class CoverPage extends Component {
  render() {
    return (
      <div>
        <div className="row my-cover-row my-row">
          <div class="col-sm-12 col-md-6 my-col my-flex my-row-letters ">
            <div className="row col-md-8 my-row my-row-cover-letters">
              <p class="my-col-quote">
                "The best preparation for tomorrow is doing your best today"
              </p>
              <p class="my-col-marina"> MARINA ESTEFANIA</p>
              <p class="my-col-front"> FRONT-END DEVELOPER</p>
            </div>

            <div className="row col-md-8 my-row my-row-cover-redes">
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

          <div class="col-sm-12 col-md-6 my-col my-img-cover" />
        </div>
      </div>
    );
  }
}

export default CoverPage;
