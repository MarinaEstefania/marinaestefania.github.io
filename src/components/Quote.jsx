import React, { Component } from "react";
import "../style/quote.css";

class Quote extends Component {
  render() {
    return (
      <section className="col-sm-11 col-md-6 col-lg-4 quote-sec">
        <p className="helloP">
          "The best <span className="over-helloP"> preparation</span> for
          tomorrow is doing your best
          <span className="over-helloP"> today</span>"
        </p>
        <p className="helloP author">-H. Jackson Brown, Jr.</p>
      </section>
    );
  }
}

export default Quote;
