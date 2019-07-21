import React, { Component } from "react";
import Modal from "react-awesome-modal";
import "../../style/organa-modal.css";
import organa from "../../img/ogn.JPG";

export default class OrganaModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  render() {
    return (
      <section>
        <input
          className="modal-button"
          type="button"
          value="view more"
          onClick={() => this.openModal()}
        />
        <Modal
          visible={this.state.visible}
          height="80%"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <div className="modal-content">
            {/* <div className="modal-content img-box">
              <img className="img-modal" src={organa}/>
            </div>    */}

            <h1 className="title-box">
              {" "}
              Burger Queen{" "}
              <span className="x-div">
              <a
                href="javascript:void(0);"
                onClick={() => this.closeModal()}
                className="modal-button cerrar-modal-btn"
              >
                X
              </a></span>
            </h1>
            <div className="modal-content info-box">
              <p>It's a Restaurant's Single Page Application. It allows waitress to
              take customer orders (add and remove items, get the total account,
              add the date and the waitress name), also, on the kitchen side you
              can see and delete the orders.
              </p>
              <div className="row my-row my-flex table-and-icons-in-modal">
                <table>
                  <tr>
                    <td className="">Stack:</td>
                    <td className="td-description-modal">
                      {" "}
                      HTML5, CSS3, Javascript, React, Firebase, Bootstrap,
                      Libraries.
                    </td>
                  </tr>
                  <tr>
                    <td className="">Role:</td>
                    <td className="td-description-modal"> Fullstack</td>
                  </tr>
                  <tr>
                    <td className="">Platforms:</td>
                    <td className="td-description-modal"> Tablet</td>
                  </tr>
                </table>
                <div className="modal-content redes-box">
                  <table className="">
                    <tr>
                      <td className="">
                        <a
                          className="icon-a-modal "
                          target="_blank"
                          href="https://marinaestefania.github.io/gdl002-burger-queen/#/tomar-orden"
                        >
                          <i className="fas fa-link fa-2x" />
                        </a>
                      </td>
                      <td>
                        {" "}
                        <a
                          className="icon-a-modal "
                          target="_blank"
                          href="https://github.com/MarinaEstefania/gdl002-burger-queen"
                        >
                          <i className="fab fa-github fa-2x" />
                        </a>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td className="">Website</td>
                      <td>Repository</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </section>
    );
  }
}
