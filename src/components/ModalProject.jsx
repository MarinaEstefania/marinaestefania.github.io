import React, { Component } from "react";
import Modal from "react-awesome-modal";
import "../style/modal.css";

export default class ModalProject extends Component {
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
    const modal = (
      <div className="modal-content">
        <h1 className="title-box">
          {this.props.info.name}
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
          {this.props.info.description}
          <table className="row my-row table-and-icons-in-modal">
            <tr>
              <td className="">Stack:</td>
              <td className="td-description-modal">{this.props.info.stack}</td>
            </tr>
            <tr>
              <td className="">Role:</td>
              <td className="td-description-modal"> {this.props.info.role}</td>
            </tr>
            <tr>
              <td className="">Platforms:</td>
              <td className="td-description-modal">
                {this.props.info.platform}
              </td>
            </tr>
          </table>
          <table className="modal-content redes-box">
            <tr>
              <td className="icon-at-modal-col">
                <a
                  className="icon-a-modal hover-modal after-modal"
                  target="_blank"
                  href={this.props.info.website}
                >
                  <i className="fas fa-link fa-2x" />
                  Website Link
                </a>
              </td>
              <td className="icon-at-modal-col">
                <a
                  className="icon-a-modal hover-modal after-modal "
                  target="_blank"
                  href={this.props.info.github}
                >
                  <i className="fab fa-github fa-2x" />
                  Repository Link
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
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
          {modal}
        </Modal>
      </section>
    );
  }
}
