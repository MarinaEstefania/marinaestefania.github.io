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
            <h1 className="modal-content title-box"> ORGANA</h1>
            <div className="modal-content info-box">
              It's a Restaurant's Single Page Application. It allows waitress to
              take customer orders (add and remove items, get the total account,
              add the date and the waitress name), also, on the kitchen side you
              can see and delete the orders.
              <div className="row my-row my-flex">
                <table className="my-table">
                  <tr>
                    <td className="">Technologies:</td>
                    <td> asdads.</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="modal-content redes-box">
              <a
                className="icon-a-modal"
                target="_blank"
                href="https://red-social-595e4.firebaseapp.com/"
              >
                <i className="fas fa-link fa-2x" />
              </a>
              <a
                className="icon-a-modal"
                target="_blank"
                href="https://github.com/MarinaEstefania/GDL002-social-network"
              >
                <i className="fab fa-github fa-2x" />
              </a>
            </div>
            <div className="cerrar-modal">
              <a
                href="javascript:void(0);"
                onClick={() => this.closeModal()}
                className="modal-button cerrar-modal-btn"
              >
                X
              </a>
            </div>
          </div>
        </Modal>
      </section>
    );
  }
}
