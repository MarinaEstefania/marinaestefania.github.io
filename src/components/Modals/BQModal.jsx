import React, { Component } from "react";
import Modal from "react-awesome-modal";
import "../../style/modal.css";
import bq from "../../img/bqmu.jpg";

export default class BQModal extends Component {
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
          className="modal-button hover-modal after-modal"
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
            <h1 className="title-box">
              {" "}
              Burger Queen{" "}
              <span>
                <a
                  href="javascript:void(0);"
                  onClick={() => this.closeModal()}
                  className="cerrar-modal-btn hover-modal after-modal"
                >
                  X
                </a>
              </span>
            </h1>
            <div className="modal-content info-box">
              It's a Restaurant's Single Page Application. It allows waiters to
              take customer orders (add and remove items, get the total account,
              add the date and the waiters name), also, on the kitchen side you
              can see and delete the orders.
              <table className="row my-row table-and-icons-in-modal">
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
              <table className="modal-content redes-box">
                <tr>
                  <td className="icon-at-modal-col">
                    <a
                      className="icon-a-modal hover-modal after-modal"
                      target="_blank"
                      href="https://marinaestefania.github.io/gdl002-burger-queen/#/tomar-orden"
                    >
                      <i className="fas fa-link fa-2x" />
                      Website Link
                    </a>
                  </td>
                  <td className="icon-at-modal-col">
                    <a
                      className="icon-a-modal hover-modal after-modal "
                      target="_blank"
                      href="https://github.com/MarinaEstefania/gdl002-burger-queen"
                    >
                      <i className="fab fa-github fa-2x" />
                      Repository Link
                    </a>{" "}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </Modal>
      </section>
    );
  }
}
